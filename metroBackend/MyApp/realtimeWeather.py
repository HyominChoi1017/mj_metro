
'''
openweathermap.org
api_key = 11b3531bb49f2d4e91421d7ead3748ba

https://pro.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
'''

import requests
import json 
import math

API_KEY = "f54b13c3c6ecf6d1d51c6be402b095dc"

# response = requests.get('https://google.com')
# print(response)


def getWeatherData(lat, lon):
    global API_KEY
    print(API_KEY)
    lat = float(lat)
    lon = float(lon)
    print(lat, lon)
    response = requests.get('https://pro.openweathermap.org/data/2.5/weather?lat={}&lon={}&APPID={}'.format(lat, lon, API_KEY)).json()
    print(response)
    weather = response['weather'][0]['description']
    temperature = round((response['main']['temp'] -273.15), 1)

    data = {
        'weather': weather,
        'temperature' : temperature
    }
    print(data)

    return data


# for test...
# getWeatherData(37.22349686935068, 127.18721018723127)