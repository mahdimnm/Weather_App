import { REQUEST_WEATHER_FAILED } from "../ActionType";

function weatherFailedAction(err) {
  return {
    type: REQUEST_WEATHER_FAILED,
    err,
  };
}

export default weatherFailedAction;
