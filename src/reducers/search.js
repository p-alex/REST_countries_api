export default (search = "", action) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      return action.payload;
    default:
      return search;
  }
};
