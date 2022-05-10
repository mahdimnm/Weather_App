import { REQUEST_CITY_FAILED } from "../ActionType";

function cityFailedAction(err) {
  return {
    type: REQUEST_CITY_FAILED,
    err,
  };
}

export default cityFailedAction;
