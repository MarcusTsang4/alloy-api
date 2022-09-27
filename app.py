from flask import Flask, send_from_directory
from flask_restful import Api
from api.ApiRoutes import ApiRoutes

app = Flask(__name__, static_url_path='', static_folder='site/build')
api = Api(app)

@app.route('/', defaults={'path': ''})
@app.route("/<string:path>")
@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory(app.static_folder,'index.html')

api.add_resource(ApiRoutes, '/submit')