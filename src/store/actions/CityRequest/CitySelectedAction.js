import { CITY_SELECTED } from "../ActionType";

function citySelectedAction(selectedCity) {
  return {
    type: CITY_SELECTED,
    info: selectedCity,
  };
}

export default citySelectedAction;
