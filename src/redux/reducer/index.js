const initialState = {
  myList: [],
};

const reducer = (state = initialState, action) => {
  console.log("state :>> ", state);
  console.log("action.payload :>> ", action.payload);
  switch (action.type) {
    case "SET_LIST":
      return {
        ...state,
        myList: [action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
