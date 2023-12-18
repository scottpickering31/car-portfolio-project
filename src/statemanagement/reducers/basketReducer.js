const initialState = {
  basketCount: 0,
  basketItem: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log("Payload:", action.payload); // Log the payload being added
      return {
        ...state,
        basketCount: state.basketCount + 1,
        basketItem: [...state.basketItem, action.payload],
      };

    case "RESET_BASKET":
      return {
        ...state,
        basketCount: 0,
        basketItem: [],
      };
    default:
      return state;
  }
};

export default basketReducer;
