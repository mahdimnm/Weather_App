import React from "react";
import { connect } from "react-redux";
import getWeather from "../../requests/getWeather";
import citySelectedAction from "../../store/actions/CityRequest/CitySelectedAction";

function SelectCity(props) {
  const changeSelect = (e) => {
    const selCity = props.cities.filter(
      (cityObj) => cityObj.city === e.target.value
    )[0];
    props.selectedCity(selCity);
    props.getWeather(selCity.lat, selCity.lon);
  };

  return (
    <>
      <select defaultValue="" className="input-option" onChange={changeSelect}>
        <option value="" disabled hidden>
          Choose Your City
        </option>
        {props.cities.map((cityObj, key) => {
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

const mapStateToProps = (state) => {
  return {
    cities: state.citySection.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectedCity: (city) => dispatch(citySelectedAction(city)),
    getWeather: (country) => dispatch(getWeather(country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCity);
