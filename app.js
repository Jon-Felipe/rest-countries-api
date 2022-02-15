import fetchCountries from "./src/fetchCountries.js";

// filters imports
import setupSearch from "./src/filters/search.js";
import setupRegions from "./src/filters/regions.js";

// specific imports
import displayCountries from "./src/displayCountries.js";
import { getElement } from "./src/utils.js";
import { setupStore, store } from "./src/store.js";

const filterBtn = getElement("#filter-btn");
const regionOptions = getElement(".region-options");

filterBtn.addEventListener("click", function () {
  regionOptions.classList.toggle("show-regions");
});

const init = async () => {
  const countries = await fetchCountries();
  const loading = getElement(".page-loading");
  if (countries) {
    setupStore(countries);
  }
  displayCountries(store, getElement(".countries"));
  setupSearch(store);
  setupRegions(store);
  loading.style.display = "none";
};

window.addEventListener("DOMContentLoaded", init);
