import { REQUEST_WEATHER } from "../ActionType";

function weatherRequestAction() {
  return {
    type: REQUEST_WEATHER,
  };
}

export default weatherRequestAction;
