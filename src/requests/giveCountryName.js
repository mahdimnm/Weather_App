import axios from "axios";

const giveCountryName = () => {
  return axios
    .get("http://localhost:7000/countries")
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export default giveCountryName;
