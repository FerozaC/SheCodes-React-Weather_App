import { useEffect, useState } from "react";
import axios from "axios";
import { formatDay } from "../utils/format";

export default function Forecast({ city }) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    let apiKey = "8acf2e12t46823aco56151e11fb9a0c0";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then((res) => {
      setForecast(res.data.daily.slice(0, 5));
    });
  }, [city]);

  return (
    <div className="weather-forecast">
      {forecast.map((day, index) => (
        <div className="weather-forecast-day" key={index}>
          <div className="weather-forecast-date">{formatDay(day.time)}</div>
          <img
            src={day.condition.icon_url}
            className="weather-forecast-icon"
            alt={day.condition.description}
          />
          <div className="weather-forecast-temperatures">
            <div className="weather-forecast-temperature">
              <strong>{Math.round(day.temperature.maximum)}º</strong>
            </div>
            <div className="weather-forecast-temperature">
              <span className="min">{Math.round(day.temperature.minimum)}</span>º
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
