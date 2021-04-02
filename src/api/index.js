import axios from "axios";
const url = "https://restcountries.eu/rest/v2";
export const fetchAll = () => axios.get(`${url}/all`);
