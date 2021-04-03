export const searchQuery = (query) => async (dispatch) => {
  try {
    dispatch({ type: "SEARCH_QUERY", payload: query });
  } catch (error) {
    console.log(error);
  }
};
