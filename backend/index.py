import os
import requests
import pandas as pd
from rank import rank_matches
from quart import Quart, request, jsonify
from quart_cors import cors
from ably import AblyRealtime
from dotenv import load_dotenv

load_dotenv()

app = Quart(__name__)
app = cors(app, allow_origin="*")

DATABRICKS_SERVER_HOSTNAME = os.environ.get("DATABRICKS_SERVER_HOSTNAME")
DATABRICKS_HTTP_PATH = os.environ.get("DATABRICKS_HTTP_PATH")
DATABRICKS_ACCESS_TOKEN = os.environ.get("DATABRICKS_ACCESS_TOKEN")

ABLY_API_KEY = os.environ.get("ABLY_API_KEY")

ably = None

@app.before_serving
async def startup():
    global ably
    ably = AblyRealtime(ABLY_API_KEY)
    await ably.connection.once_async('connected')
    print('Connected to Ably.')


@app.after_serving
async def shutdown():
    global ably
    await ably.close()
    print('Closed the connection to Ably.')


@app.route('/')
def app_root():
    return jsonify({"message": "reached root"})


def sql_query(query: str) -> dict:
    """
    Executes a SQL query on the Databricks server.
    """
    headers = {
        'Authorization': f'Bearer {DATABRICKS_ACCESS_TOKEN}'
    }

    url = f'https://{DATABRICKS_SERVER_HOSTNAME}/api/2.0/sql/statements/'
    query = {
        "warehouse_id": "d41b1963ad938947",
        "statement": query,
        "wait_timeout": "30s",
        "on_wait_timeout": "CANCEL"
    }
    response = requests.post(url, headers=headers, json=query)
    response.raise_for_status()
    return response.json()


def list_all(vehicle_restriction=None) -> dict:
    """
    Returns all the carpoolers in the database, after applying filters.
    """
    if vehicle_restriction:
        result = sql_query("SELECT * FROM examples WHERE vehicle_type = '{}'".format(vehicle_restriction))
    else:
        result = sql_query("SELECT * FROM examples")
    return result['result']['data_array']


@app.route('/api/search', methods=['POST'])
def search() -> dict:
    """
    Returns the existing carpoolers that match with the user's desired carpool trip.
    """
    keys = ['username', 
            'start_location', 
            'end_location', 
            'departure_time', 
            'vehicle_type', 
            'max_start_diff', 
            'max_end_diff', 
            'max_time_diff',
            'vehicle_restriction']
    args = {key: request.form[key] for key in keys}
    print(args)
    user_data = pd.DataFrame([args], columns=['username', 'start_location', 'end_location', 'departure_time', 'vehicle_type'])
    user_data = user_data.squeeze()

    db = pd.DataFrame(list_all(args['vehicle_restriction']), columns=['departure_time', 'end_location', 'start_location', 'username', 'vehicle_type'])
    db['departure_time'] = db['departure_time'].str.split('.').str[0]

    result = rank_matches(user_data, db, args['max_start_diff'], args['max_end_diff'], args['max_time_diff'])
    return jsonify(result.to_dict(orient='records')), 200


@app.route('/api/chat/send', methods=['POST'])
async def chat_send():
    """
    Sends a message to the user's channel.
    """
    data = await request.get_json()
    userid = data.get('userid')
    message = data.get('message')

    channel = ably.channels.get(str(userid))
    await channel.publish('new_message', message)
    return 'Message sent.'


@app.route('/api/chat/receive', methods=['POST'])
async def chat_receive():
    """
    Listens for new messages from the user's channel.
    """
    data = await request.get_json()
    userid = data.get('userid')

    channel = ably.channels.get(str(userid))
    def listener(message):
        print('Message received: ' + message.data)
    await channel.subscribe('new_message', listener)
    return 'Listening...'

app.run(debug=True)
