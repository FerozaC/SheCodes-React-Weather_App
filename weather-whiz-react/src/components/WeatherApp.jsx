import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import Forecast from "./Forecast";
import { formatDate } from "../utils/format";
import logo from "../assets/weather_app_logo.png";

import axios from "axios";

export default function WeatherApp() {
  const [city, setCity] = useState("Johannesburg");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    searchCity(city);
  }, [city]);

  function searchCity(city) {
    let apiKey = "8acf2e12t46823aco56151e11fb9a0c0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then((response) => {
      setWeather(response.data);
    });
  }

  return (
    <>
      <header>
        <section className="weather-logo">
          <img src={logo} width="70" />
          <span className="app-name">Feroza's WeatherWhiz</span>
        </section>
        <br />
        <SearchForm onSearch={setCity} />
      </header>

      {weather && (
        <>
          <div className="weather-app-data">
            <div>
              <h1>{weather.city}</h1>
              <p>
                <span>{formatDate(weather.time)}</span>,{" "}
                <span>{weather.condition.description}</span>
                <br />
                Humidity: <span>{weather.temperature.humidity}%</span>, Wind:{" "}
                <span>{weather.wind.speed}km/h</span>
              </p>
            </div>
            <div className="weather-app-temperature-container">
              <div id="icon">
                <img
                  src={weather.condition.icon_url}
                  className="weather-app-icon"
                />
              </div>
              <div className="weather-app-temperature">
                {Math.round(weather.temperature.current)}
              </div>
              <div className="weather-app-unit">°C</div>
            </div>
          </div>
          <Forecast city={weather.city} />
        </>
      )}

      <footer>
        <p>
          This project was coded by{" "}
          <a href="https://github.com/FerozaC" target="_blank">Feroza Chishty</a>{" "}
          and is{" "}
          <a href="https://github.com/FerozaC/weather-app" target="_blank">on GitHub</a>{" "}
          and{" "}
          <a
            href="#"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </>
  );
}
