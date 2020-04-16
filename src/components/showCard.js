import React from "react";

export default function showCard({ weather, dateBuilder }) {
  return (
    <div>
      <div className="location-box">
        <div className="location">
          {weather.name}, {weather.sys.country}
        </div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">{Math.round(weather.main.temp)}°c</div>
        <div className="weather">{weather.weather[0].main}</div>
      </div>
    </div>
  );
}
