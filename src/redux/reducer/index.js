const reducer = (state, actions) => {
  switch (actions.type) {
    case "SET_LIST":
      return {
        ...state,
        myList: [actions.payload],
      };

    default:
      return state;
  }
};

export default reducer;
