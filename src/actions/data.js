const api = require("../api");

export const fetchAll = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAll();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
