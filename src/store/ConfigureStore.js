import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import countryReducer from "./reducers/CountryReducer";
import cityReducer from "./reducers/CityReducer";
import weatherReducer from "./reducers/WeatherReducer";
import giveCountryName from "../requests/giveCountryName";

function configureStore() {
  const rootReducer = combineReducers({
    countrySection: countryReducer,
    citySection: cityReducer,
    weatherSection: weatherReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(thunk));
  store.dispatch(giveCountryName());
  store.subscribe(() => {
    console.log(store.getState());
  });
  return store;
}

export default configureStore;
