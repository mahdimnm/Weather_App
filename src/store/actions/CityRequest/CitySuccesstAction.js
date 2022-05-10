import { REQUEST_CITY_SUCCESS } from "../ActionType";

function citySuccesstAction(cities) {
  return {
    type: REQUEST_CITY_SUCCESS,
    cities,
  };
}

export default citySuccesstAction;
