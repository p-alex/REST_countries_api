const api = require("../api");

export const fetchAll = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAll();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchOne = (country) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(country);
    dispatch({ type: "FETCH_ONE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const resetData = () => async (dispatch) => {
  try {
    dispatch({ type: "RESET_DATA" });
  } catch (error) {
    console.log(error);
  }
};
