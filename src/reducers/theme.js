export default (theme = "Dark", action) => {
  switch (action.type) {
    case "TOGGLE_THEMES":
      return action.payload;
    default:
      return theme;
  }
};
