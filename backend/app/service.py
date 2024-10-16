import requests

def get_weather_data(city):
    api_key = 'fe06a461b9d5368512d79e91de2eced4' 
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            simplified_data = {
                'city': data['name'],
                'temperature': data['main']['temp'],
                'description': data['weather'][0]['description'],
                'humidity': data['main']['humidity'],
                'wind_speed': data['wind']['speed']
            }
            return simplified_data
        else:
            return {'error': 'City not found or API error'}
    except Exception as e:
        return {'error': str(e)}
