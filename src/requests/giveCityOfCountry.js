import axios from "axios";

const giveCityOfCountry = (countryName) => {
  return axios
    .get(`http://localhost:7000/countries/${countryName}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export default giveCityOfCountry;
