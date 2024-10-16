import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the custom CSS for dark theme

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();

    if (city) {
      axios
        .get(`http://127.0.0.1:8000/api/weather/${city}/`)
        .then((response) => {
          setWeather(response.data);
          setError('');
          setCity('');
        })
        .catch(() => {
          setWeather(null);
          setError('City not found or API error');
          setCity('');
        });
    } else {
      setError('Please enter a city');
    }
  };

  return (
    <div className="container mt-5 h-100 w-100 bg-dark text-white">
      <h1 className="text-center mb-4">Weather Search</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSearch}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </form>
          {error && <div className="alert alert-danger">{error}</div>}
          {weather && (
            <div className="card bg-secondary text-white shadow">
              <div className="card-body">
                <h5 className="card-title">Weather in {weather.city}</h5>
                <p className="card-text">
                  Temperature: {weather.temperature}°C
                </p>
                <p className="card-text">
                  Condition: {weather.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
