import flask
import numpy as np
import json
from astropy.time import Time
from astral import LocationInfo
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
cors = CORS(app)

@app.route('/api')
def api():
    d = {
        "result": {
            "Dew_Point": 21,
            "Humidity": 28,
            "Rain_Rate_Inches_Hr": 0,
            "SensorName": "WeatherLink",
            "Temperature": 12.22,
            "Timestamp": 1702419200000,
            "Two_Minute_Average_Wind_Speed": 0,
            "Wind_Direction": 178,
            "Wind_Speed": 0
        }
    }
    return json.dumps(d)
if __name__ == '__main__':
    app.run(debug=True, port=5002)