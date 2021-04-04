import axios from "axios";
const url = "https://restcountries.eu/rest/v2";
export const fetchAll = () => axios.get(`${url}/all`);
export const fetchOne = (country) => axios.get(`${url}/name/${country}`);
export const fetchBorders = (borders) =>
  axios.get(`${url}/alpha?codes=${borders}`);
