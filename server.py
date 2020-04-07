from flask import Flask
from flask import request
from flask import render_template
import os
import json
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, async_mode=None, logger=True, engineio_logger=True)

user_tup = ()

@app.route('/')
def base_template(name=None):
    return render_template("index.html")

@socketio.on('connect', namespace='/test')
def test_connect():
    print('Client connected')


@app.route('/post', methods=['POST'])
def postJsonHandler():
    print(request.is_json)
    content = request.get_json()

    user = None

    if content['user'] == "REF":
        user = "REF"
    if content['user'] != "REF":
        user = content['user']

    socketio.emit('user_info', {'user': user}, namespace='/test')

    return "works"





app.run(host='0.0.0.0', port=5000)