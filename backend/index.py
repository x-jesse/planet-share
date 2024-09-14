from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import requests
import pandas as pd

from rank import rank_matches

app = Flask(__name__)
CORS(app)

DATABRICKS_SERVER_HOSTNAME = os.getenv("DATABRICKS_SERVER_HOSTNAME")
DATABRICKS_HTTP_PATH = os.getenv("DATABRICKS_HTTP_PATH")
DATABRICKS_ACCESS_TOKEN = os.getenv("DATABRICKS_ACCESS_TOKEN")

@app.route('/')
def app_root():
    return jsonify({"message": "reached root"})

def sql_query(query: str) -> dict:
    """
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

def list_all() -> dict:
    """
    """
    result = sql_query("SELECT * FROM examples")
    return result['result']['data_array']

@app.route('/api/search', methods=['POST'])
def search() -> dict:
    """
    """
    args = [request.form['username'], request.form['start_location'], request.form['end_location'], request.form['departure_time'], request.form['vehicle_type']]
    user_data = pd.DataFrame([args], columns=['username', 'start_location', 'end_location', 'departure_time', 'vehicle_type'])
    user_data = user_data.squeeze()

    db = pd.DataFrame(list_all(), columns=['departure_time', 'end_location', 'start_location', 'username', 'vehicle_type'])
    db['departure_time'] = db['departure_time'].str.split('.').str[0]

    result = rank_matches(user_data, db)
    print(result)
    return jsonify(result.to_dict(orient='records'))

@app.route('/api/matches')
def get_matches() -> dict:
    pass

