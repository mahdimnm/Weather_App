import React from "react";
import "./card.css";

function Card({ weather }) {
  return (
    <div className="card">
      <img
        src={require(`../../assets/weatherLogos/${weather.weather}.png`)}
        alt="red"
        className="weather-logo"
      />
      <h3 className="weather-degree">{weather.degree}&#176;</h3>
      <div className="weather-day">
        <p>{weather.day}</p>
      </div>
    </div>
  );
}

export default Card;
