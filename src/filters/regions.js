import { getElement } from "../utils.js";
import displayCountries from "../displayCountries.js";

const setupRegions = (store) => {
  let regions = ["All", ...new Set(store.map((countries) => countries.region))];
  const regionsDOM = getElement(".region-options");
  regionsDOM.innerHTML = regions
    .map((region) => {
      return `
        <li class="region-option">${region}</li>
      `;
    })
    .join("");
  regionsDOM.addEventListener("click", function (e) {
    const element = e.target;
    if (element.classList.contains("region-option")) {
      let newStore = [];
      if (element.textContent === "All") {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (country) => country.region === e.target.textContent
        );
      }
      displayCountries(newStore, getElement(".countries"));
      getElement(".region-options").classList.remove("show-regions");
    }
  });
};

export default setupRegions;
