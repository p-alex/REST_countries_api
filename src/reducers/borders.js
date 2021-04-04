export default (borders = [], action) => {
  switch (action.type) {
    case "FETCH_BORDERS":
      return action.payload;
    case "RESET_BORDERS":
      return [];
    default:
      return borders;
  }
};
