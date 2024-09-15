import asyncio
import time
from ably import AblyRealtime
import os
from quart import Quart, request
from quart_cors import cors
from dotenv import load_dotenv


load_dotenv()

app = Quart(__name__)
app = cors(app, allow_origin="*")

ably = None

@app.before_serving
async def startup():
    global ably
    ably = AblyRealtime(os.environ.get('ABLY_API_KEY'))
    await ably.connection.once_async('connected')
    print('Connected to Ably')

@app.after_serving
async def shutdown():
    global ably
    await ably.close()

@app.route('/')
async def index():
    print('Hello, World!')
    return 'asdfdasf'

@app.route('/api/test', methods=['GET'])
async def test():
    return 'Hello, World!'

app.run(debug=True)
