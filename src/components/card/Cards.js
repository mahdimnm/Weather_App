import React, { useState } from "react";
import Card from "./Card";
const weatherData = require("./data.json");

function Cards({ changeSelectedCity }) {
  const [weeks, setWeeks] = useState([
    "seunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]);
  return (
    <div className="card-container">
      {weatherData.map((weather, key) => (
        <Card key={key} weather={weather} />
      ))}
    </div>
  );
}

export default Cards;
