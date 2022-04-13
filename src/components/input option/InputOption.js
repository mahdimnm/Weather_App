import React, { useState, useEffect } from "react";
import giveCityOfCountry from "../../requests/giveCityOfCountry";
import giveCountryName from "../../requests/giveCountryName";
import SelectCity from "./SelectCity";
import SelectCountry from "./SelectCountry";
import "./InputCountry.css";

function InputOption() {
  const [countries, setCountries] = useState();
  const [cities, setCities] = useState();
  const [selectedCountry, setSelectedCountry] = useState();

  useEffect(() => {
    giveCountryName().then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    giveCityOfCountry(selectedCountry).then((data) => setCities(data));
  }, [selectedCountry]);

  const changeCountry = (e) => {
    setSelectedCountry(e.target.value);
  };

  return countries ? (
    <form className="input-country-container">
      <SelectCountry countries={countries} changeCountry={changeCountry} />
      {selectedCountry ? <SelectCity cities={cities} /> : null}
    </form>
  ) : (
    <h2>Loading...</h2>
  );
}

export default InputOption;
