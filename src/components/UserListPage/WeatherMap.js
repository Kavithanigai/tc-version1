import React, { Component } from 'react';
// import SearchBar from './SearchBar';
// import WeatherList from './WeatherList';
import WeatherForm from './WeatherForm';
import Weather from './Weather';
import Menu from './Menu';

const weather_api_key = '62d077d3d898080d05249ba550fa1b45';

export default class WeatherMap extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    latitude: undefined,
    longitude: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weather_api_key}&units=metric`
    );
    const data = await api_call.json();

    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        latitude: undefined,
        longitude: undefined,
        error: 'Please enter a City and Country'
      });
    }
  };
  render() {
    return (
      <div className="tc-feature-bcg">
        <Menu />
        <div className="weather">
          <h2>Weather at your Destination!</h2>
          <div className="weather-form">
            <WeatherForm getWeather={this.getWeather} />
          </div>
          <div className="weather-result">
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}
