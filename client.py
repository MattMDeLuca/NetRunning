import requests
import json

def client():
    while True:
        message_to_ref = input("What would you like to do? \n")
        try:
            r = requests.post("http://127.0.0.1:5000/post", json={'target': message_to_ref})
            print(r.content)
        except:
            print('The server is down right now. Please contact your ref.')
            break







if __name__ == '__main__':
    client()
