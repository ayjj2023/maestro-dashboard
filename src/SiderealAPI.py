import flask
from flask import request
from astral import LocationInfo
from astropy.time import Time
from datetime import datetime
import json

from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
def get_current_sidereal_time(location):
    currentTime = datetime.utcnow().replace(second=0, microsecond=0)
    return Time(currentTime).sidereal_time('mean', longitude=location.longitude)
@app.route('/lst', methods = ["GET", "POST"])
def lst():
    request = flask.request
    j = request.json
    longitude = float(j['longitude'])
    location = LocationInfo("obs", "obs", "UTC", longitude, 35)
    s = json.dumps({"time":str(get_current_sidereal_time(location))})
    print(s)
    return s

if __name__ == '__main__':
    app.run(debug=True, port=5001)