import { COUNTRY_SELECTED } from "../ActionType";

function countrySelectedAction(selectedCountry) {
  return {
    type: COUNTRY_SELECTED,
    info: selectedCountry,
  };
}

export default countrySelectedAction;
