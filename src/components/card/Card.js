import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <img
        src={require(`../../assets/weatherLogos/${props.weather.weather[0].main}.png`)}
        alt="red"
        className="weather-logo"
      />
      <h3 className="weather-degree">{props.weather.temp.day}&#176;</h3>
      <div className="weather-day">
        <p>{props.weather.dt}</p>
      </div>
    </div>
  );
}

export default Card;
