from django.urls import path
from .views import weather_view

urlpatterns = [
    path('api/weather/<str:city>/', weather_view, name='weather'),  # Pass city as a URL parameter
]
