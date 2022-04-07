import React from "react";

function Card({ weekday }) {
  return (
    <div className="card">
      <img src="../../assets/snowy.jpeg" alt="red" />
      <h3>0'</h3>
      <div>
        <p>{weekday}</p>
      </div>
    </div>
  );
}

export default Card;
