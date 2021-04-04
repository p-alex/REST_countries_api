export default (data = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "FETCH_ONE":
      return action.payload;
    case "RESET_DATA":
      return [];
    default:
      return data;
  }
};
