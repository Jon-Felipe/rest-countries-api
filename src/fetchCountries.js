import { allCountriesAPI } from "./utils.js";

const fetchCountries = async () => {
  const response = await fetch(allCountriesAPI).catch((err) =>
    console.log(err)
  );
  if (response) {
    return response.json();
  }
  return response;
};

export default fetchCountries;
