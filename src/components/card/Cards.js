import React, { useState } from "react";
import Card from "./Card";

function Cards() {
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
    <>
      {weeks.map((weekday, key) => (
        <Card key={key} weekday={weekday} />
      ))}
    </>
  );
}

export default Cards;
