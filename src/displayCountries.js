import { formatNumber } from "./utils.js";

const displayCountries = (countries, element, filters) => {
  //   display countries
  element.innerHTML = countries
    .map((country) => {
      {
        const { flags, name, population, region, capital } = country;
        return `
  <article class="country">
    <img src="${flags.png}" alt="country flag" class="flag" />
    <div class="country-info">
      <h1 class="name">${name.common}</h1>
      <p class="population">
        Population: <span class="value">${formatNumber(population)}</span>
      </p>
      <p class="region">Region: <span class="value">${region}</span></p>
      <p class="capital">
        Capital: <span class="value">${capital}</span>
      </p>
    </div>
  </article>
  `;
      }
    })
    .join(" ");
};

export default displayCountries;
