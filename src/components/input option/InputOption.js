import React from "react";
import giveCityOfCountry from "../../requests/giveCityOfCountry";
import SelectCity from "./SelectCity";
import SelectCountry from "./SelectCountry";
import "./InputCountry.css";
import { connect } from "react-redux";
import countrySelectedAction from "../../store/actions/CountryRequest/CountrySelectedAction";

function InputOption(props) {
  const handleCountryChange = (country) => {
    props.selectCountry(country);
    props.CityNames(country);
  };
  return !props.countryLoading ? (
    <form className="input-country-container">
      <SelectCountry handleCountryChange={handleCountryChange} />
      {props.cities.length > 0 ? <SelectCity /> : null}
      <h1>{props.countryLoading}</h1>
    </form>
  ) : (
    <h2>Loading...</h2>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    countryLoading: state.countrySection.countryLoading,
    selectedCountry: state.countrySection.selectedCountry,
    cities: state.citySection.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCountry: (country) => dispatch(countrySelectedAction(country)),
    CityNames: (country) => dispatch(giveCityOfCountry(country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputOption);
