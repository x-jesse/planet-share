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

@app.route('/api/chat/send', methods=['POST'])
async def chat_send():
    data = await request.get_json()
    userid = data.get('userid')
    message = data.get('message')

    channel = ably.channels.get('get-started')
    await channel.publish('first', message)
    print('Message sent')
    return 'Message sent'

@app.route('/api/chat/receive', methods=['POST'])
async def chat_receive():
    data = await request.get_json()
    userid = data.get('userid')

    channel = ably.channels.get('get-started')
    def listener(message):
        print('Message received: ' + message.data)
    await channel.subscribe('first', listener)
    print('listener registered')
    return 'Message received'

@app.route('/api/test', methods=['GET'])
async def test():
    return 'Hello, World!'

app.run(debug=True)
