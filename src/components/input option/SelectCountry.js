import React from "react";

function SelectCountry({ countries, changeCountry }) {
  return (
    <select defaultValue="" onChange={changeCountry} className="input-option">
      <option value="" disabled hidden>
        Choose Your Country
      </option>
      {countries.map((countryObj, key) => {
        return (
          <option key={key} value={countryObj.country}>
            {countryObj.country}
          </option>
        );
      })}
    </select>
  );
}

export default SelectCountry;
