export const searchQuery = (query) => async (dispatch) => {
  try {
    dispatch({ type: "SEARCH_QUERY", payload: query });
  } catch (error) {
    console.log(error);
  }
};

export const resetQuery = (query) => async (dispatch) => {
  try {
    dispatch({ type: "RESET_QUERY" });
  } catch (error) {
    console.log(error);
  }
};
