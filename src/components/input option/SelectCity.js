import React from "react";

function SelectCity({ cities }) {
  return (
    <>
      <select defaultValue="" className="input-option">
        <option value="" disabled hidden>
          Choose Your City
        </option>
        {cities.map((cityObj, key) => {
          return (
            <option key={key} value={cityObj.city}>
              {cityObj.city}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default SelectCity;
