const reducer = (state, actions) => {
  console.log("state :>> ", state);
  console.log("actions.payload :>> ", actions.payload);
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
