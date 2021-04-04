export const themeSwitch = (theme) => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_THEMES", payload: theme });
  } catch (error) {
    console.log(error);
  }
};
