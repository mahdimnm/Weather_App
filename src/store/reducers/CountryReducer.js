import {
  REQUEST_COUNTRY,
  REQUEST_COUNTRY_SUCCESS,
  REQUEST_COUNTRY_FAILED,
  COUNTRY_SELECTED,
} from "../actions/ActionType";

const initialCountryState = {
  countryLoading: true,
  countries: [],
  selectedCounty: "",
  error: "",
};

function countryReducer(state = initialCountryState, action) {
  switch (action.type) {
    case REQUEST_COUNTRY:
      return {
        ...state,
        countryLoading: true,
      };
    case REQUEST_COUNTRY_SUCCESS:
      return {
        ...state,
        countryLoading: false,
        countries: action.countries,
      };
    case REQUEST_COUNTRY_FAILED:
      return {
        ...state,
        countryLoading: false,
        error: action.err,
      };
    case COUNTRY_SELECTED:
      return {
        ...state,
        selectedCounty: action.info,
      };
    default:
      return state;
  }
}

export default countryReducer;
