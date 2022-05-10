import { REQUEST_COUNTRY_SUCCESS } from "../ActionType";

function counterySuccesstAction(countries) {
  return {
    type: REQUEST_COUNTRY_SUCCESS,
    countries,
  };
}

export default counterySuccesstAction;
