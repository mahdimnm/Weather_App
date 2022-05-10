import { REQUEST_COUNTRY_FAILED } from "../ActionType";

function counteryFailedAction(err) {
  return {
    type: REQUEST_COUNTRY_FAILED,
    err,
  };
}

export default counteryFailedAction;
