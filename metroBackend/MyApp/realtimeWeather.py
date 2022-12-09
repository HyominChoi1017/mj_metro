
'''
openweathermap.org
api_key = f54b13c3c6ecf6d1d51c6be402b095dc

https://pro.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
'''

import requests

API_KEY = "11b3531bb49f2d4e91421d7ead3748ba"

# response = requests.get('https://google.com')
# print(response)


def getWeatherData(lat, lon):
    global API_KEY
    print(API_KEY)
    lat = float(lat)
    lon = float(lon)
    response = requests.get('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}')
    print(response.json())
    return response.json()


# for test...
# getWeatherData(37.22349686935068, 127.18721018723127)