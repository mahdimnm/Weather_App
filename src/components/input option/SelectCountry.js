import React, { useState } from "react";
import { connect } from "react-redux";
import countrySelectedAction from "../../store/actions/CountryRequest/CountrySelectedAction.js";

function SelectCountry(props) {
  return (
    <select
      defaultValue=""
      onChange={(e) => props.handleCountryChange(e.target.value)}
      className="input-option"
    >
      <option value="" disabled hidden>
        Choose Your Country
      </option>
      {props.countries.map((countryObj, key) => {
        return (
          <option key={key} value={countryObj.country}>
            {countryObj.country}
          </option>
        );
      })}
    </select>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    countries: state.countrySection.countries,
  };
};

export default connect(mapStateToProps)(SelectCountry);
