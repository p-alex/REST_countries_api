export default (search = "", action) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      return action.payload;
    case "RESET_QUERY":
      return "";
    default:
      return search;
  }
};
