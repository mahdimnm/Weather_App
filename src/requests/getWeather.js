import axios from "axios";
import weatherRequestAction from "../store/actions/WeatherRequest/WeatherRequestAction";
import weatherSuccesstAction from "../store/actions/WeatherRequest/WeatherSuccesstAction";
import weatherFailedAction from "../store/actions/WeatherRequest/WeatherFailedtAction";

function getWeather(lat = 0, lon = 0) {
  return function (dispatch) {
    dispatch(weatherRequestAction());
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=b1b621289af559241a5af23fa5353840`
      )
      .then((response) => response.data)
      .then((data) => {
        const weather = data.daily;
        dispatch(weatherSuccesstAction(weather));
      })
      .catch((err) => weatherFailedAction(err));
  };
}
export default getWeather;
