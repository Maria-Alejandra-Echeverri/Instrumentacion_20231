import requests

url = 'http://localhost:3000/api/waterQ'
objeto = {"place": "MARINILLA",
          "station": 1,
          "turbidity": 40,
          "color": [10, 20, 30],
          "conductivity": 2,
          "ph": 10,
          "temperature": 25,
          "quality": "potable"}

resp = requests.post(url, json=objeto)

print(resp.text)