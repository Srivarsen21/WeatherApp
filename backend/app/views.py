from rest_framework.decorators import api_view
from rest_framework.response import Response
from .service import get_weather_data

@api_view(['GET'])
def weather_view(request, city):
    if city:
        weather_data = get_weather_data(city)  
        if 'error' not in weather_data: 
            return Response(weather_data)
        else:
            return Response({'error': 'City not found or API error'}, status=404)
    else:
        return Response({'error': 'City parameter is required'}, status=400)
