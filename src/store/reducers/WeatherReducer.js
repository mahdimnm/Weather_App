import {
  REQUEST_WEATHER,
  REQUEST_WEATHER_SUCCESS,
  REQUEST_WEATHER_FAILED,
} from "../actions/ActionType";

const initialWeatherState = {
  weatherLoading: true,
  weatherForcast: [],
  error: "",
};

function weatherReducer(state = initialWeatherState, action) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return {
        ...state,
        weatherLoading: true,
        weatherForcast: [],
        error: "",
      };
    case REQUEST_WEATHER_SUCCESS:
      return {
        ...state,
        weatherLoading: false,
        weatherForcast: action.weather,
        error: "",
      };
    case REQUEST_WEATHER_FAILED:
      return {
        ...state,
        weatherLoading: false,
        weatherForcast: [],
        error: action.err,
      };
    default:
      return state;
  }
}

export default weatherReducer;
