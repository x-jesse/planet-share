import requests

header = {
    'Authorization': 'Bearer dapi490c4dcbc3c3b87a6212feeaa96b9e7e'
}
query = {
  "query": {
    "description": "test",
    # "tags": [
    #   "Tag 1"
    # ],
    "display_name": "Example query",
    # "parent_path": "/Workspace/Users/user@acme.com",
    "query_text": "SELECT 1",
    "parameters": [
    ],
    "warehouse_id": "d41b1963ad938947",
    "run_as_mode": "OWNER"
  }
}

DATABRICKS_HOST = 'dbc-0e36dd7a-4a4d.cloud.databricks.com'
DATABRICKS_ACCESS_TOKEN = 'dapi490c4dcbc3c3b87a6212feeaa96b9e7e'

headers = {
    'Authorization': f'Bearer {DATABRICKS_ACCESS_TOKEN}'
}

url = f'https://{DATABRICKS_HOST}/api/2.0/sql/queries'

# response = requests.post(url, headers=headers, json=query)
# print(response.json())

url = f'https://{DATABRICKS_HOST}/api/2.0/sql/queries/7db045ef-cd4e-4f13-8bab-864a5772ba00'
response = requests.get(url, headers=headers)
