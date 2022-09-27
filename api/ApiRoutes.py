from flask import request
from flask_restful import Resource
import base64
import os
import requests

class ApiRoutes(Resource):
  def post(self):
    json = request.json

    auth = os.environ['username'] + ':' + os.environ['password']
    basic_auth = base64.b64encode(str.encode(auth))
    authorization_token = 'Basic ' + basic_auth.decode()

    url = "https://sandbox.alloy.co/v1/evaluations/"
    headers = {
        "Content-Type": "application/json",
        "Authorization": authorization_token
    }

    response = requests.post(url, json=json, headers=headers)

    return response.text