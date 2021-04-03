export const setFilterOption = (region) => async (dispatch) => {
  try {
    dispatch({ type: "SET_FILTER", payload: region });
  } catch (error) {
    console.log(error);
  }
};
