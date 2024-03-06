import flask
from flask import request
import json

from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/lst', methods = ["POST"])
def lst():
    s = json.dumps({"Telescope":str("good"),
                    "Maestro":str("hello")})
    print(s)
    return s

if __name__ == '__main__':
    app.run(debug=True, port=5003)