import { REQUEST_WEATHER_SUCCESS } from "../ActionType";

function weatherSuccesstAction(weather) {
  return {
    type: REQUEST_WEATHER_SUCCESS,
    weather,
  };
}

export default weatherSuccesstAction;
