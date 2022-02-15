import { getStorageItem, setStorageItem } from "./utils.js";
let store = getStorageItem("store");
const setupStore = (countries) => {
  store = countries.map((country) => {
    const { capital, flags, name, population, region } = country;
    return { capital, flags, name, population, region };
  });
  setStorageItem("store", store);
};

export { store, setupStore };
