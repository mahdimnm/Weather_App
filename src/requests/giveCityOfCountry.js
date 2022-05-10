import axios from "axios";
import cityRequestAction from "../store/actions/CityRequest/CityRequestAction";
import citySuccesstAction from "../store/actions/CityRequest/CitySuccesstAction";
import cityFailedAction from "../store/actions/CityRequest/CityFailedtAction";

const giveCityOfCountry = (countryName) => {
  return function (dispatch) {
    dispatch(cityRequestAction());
    axios
      .get(`http://localhost:7000/countries/${countryName}`)
      .then((response) => {
        const cities = response.data;
        dispatch(citySuccesstAction(cities));
      })
      .catch((err) => cityFailedAction(err));
  };
};

export default giveCityOfCountry;
