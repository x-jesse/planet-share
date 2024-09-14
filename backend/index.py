from flask import Flask, jsonify
from databricks import sql
import os

app = Flask(__name__)

# Databricks connection parameters
SERVER_HOSTNAME = os.getenv("DATABRICKS_SERVER_HOSTNAME")
HTTP_PATH = os.getenv("DATABRICKS_HTTP_PATH")
ACCESS_TOKEN = os.getenv("DATABRICKS_ACCESS_TOKEN")

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/query_data')
def query_data():
    try:
        with sql.connect(server_hostname=SERVER_HOSTNAME,
                         http_path=HTTP_PATH,
                         access_token=ACCESS_TOKEN) as connection:

            with connection.cursor() as cursor:
                cursor.execute("SELECT * FROM your_table LIMIT 10")
                result = cursor.fetchall()

        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)