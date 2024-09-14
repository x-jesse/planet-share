import requests


DATABRICKS_HOST = 'dbc-0e36dd7a-4a4d.cloud.databricks.com'
DATABRICKS_ACCESS_TOKEN = 'dapi490c4dcbc3c3b87a6212feeaa96b9e7e'

headers = {
    'Authorization': f'Bearer {DATABRICKS_ACCESS_TOKEN}'
}

url = f'https://{DATABRICKS_HOST}/api/2.0/sql/statements/'
query = {
  "warehouse_id": "d41b1963ad938947",
  "statement": "SELECT * FROM examples",
  "wait_timeout": "30s",
  "on_wait_timeout": "CANCEL"
}
response = requests.post(url, headers=headers, json=query)
print(response.json())
