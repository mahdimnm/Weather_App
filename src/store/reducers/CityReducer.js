import {
  REQUEST_CITY,
  REQUEST_CITY_SUCCESS,
  REQUEST_CITY_FAILED,
  CITY_SELECTED,
} from "../actions/ActionType";

const initialCityState = {
  cityLoading: true,
  cities: [],
  selectedCity: {},
  error: "",
};

function cityReducer(state = initialCityState, action) {
  switch (action.type) {
    case REQUEST_CITY:
      return {
        ...state,
        cities: [],
        selectedCity: {},
        cityLoading: true,
      };
    case REQUEST_CITY_SUCCESS:
      return {
        ...state,
        cityLoading: false,
        cities: action.cities,
      };
    case REQUEST_CITY_FAILED:
      return {
        ...state,
        cityLoading: false,
        error: action.err,
      };
    case CITY_SELECTED:
      return {
        ...state,
        selectedCity: action.info,
      };
    default:
      return state;
  }
}

export default cityReducer;
