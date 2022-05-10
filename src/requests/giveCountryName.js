import axios from "axios";
import counteryRequestAction from "../store/actions/CountryRequest/CounteryRequestAction";
import counterySuccesstAction from "../store/actions/CountryRequest/CounterySuccesstAction";
import counteryFailedAction from "../store/actions/CountryRequest/CounteryFailedtAction";
import giveCityOfCountry from "./giveCityOfCountry";

const giveCountryName = () => {
  return function (dispatch) {
    dispatch(counteryRequestAction());
    axios
      .get("http://localhost:7000/countries")
      .then((response) => {
        const countries = response.data;
        dispatch(counterySuccesstAction(countries));
      })
      .catch((err) => dispatch(counteryFailedAction(err)));
  };
};

export default giveCountryName;
