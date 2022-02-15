import { getElement } from "../utils.js";
import displayCountries from "../displayCountries.js";

const setupSearch = (store) => {
  const form = getElement(".form");
  const nameInput = getElement(".form-control");
  form.addEventListener("keyup", function () {
    const value = nameInput.value;
    if (value) {
      const newStore = store.filter((country) => {
        let {
          name: { common },
        } = country;
        common = common.toLowerCase();
        if (common.startsWith(value)) {
          return country;
        }
      });
      displayCountries(newStore, getElement(".countries"));
      if (newStore.length < 1) {
        const countries = getElement(".countries");
        countries.innerHTML = `<h3 class="filter-error">
            Sorry, no products matched your search
          </h3>`;
      }
    } else {
      displayCountries(store, getElement(".countries"));
    }
  });
};

export default setupSearch;
