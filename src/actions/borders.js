const api = require("../api");

export const fetchBorders = (borders) => async (dispatch) => {
  try {
    const { data } = await api.fetchBorders(borders);
    // let borderCountries = [];
    // data.map((item) => {
    //   borderCountries.push(item.name);
    // });
    dispatch({ type: "FETCH_BORDERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const resetBorders = () => async (dispatch) => {
  try {
    dispatch({ type: "RESET_BORDERS" });
  } catch (error) {
    console.log(error);
  }
};
