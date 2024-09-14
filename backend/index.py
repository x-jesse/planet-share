from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import requests

# from rank import rank

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

@app.route('/api/listall')
def list_all() -> dict:
    """
    """
    result = sql_query("SELECT * FROM examples")
    print(result)
    return jsonify(result['result']['data_array'])

@app.route('/api/search')
def search() -> dict:
    """
    """
    name = request.args.get('name')
    result = sql_query(f"SELECT * FROM examples WHERE username LIKE '%{name}%'")
    return jsonify(result['result']['data_array'])


@app.route('/api/matches')
def get_matches(query: str) -> dict:
    pass

