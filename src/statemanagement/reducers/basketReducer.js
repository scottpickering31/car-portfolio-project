const initialState = {
  basketCount: 0,
  basketItem: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basketCount: state.basketCount + 1,
        basketItem: [...state.basketItem, action.payload],
      };

    case "REMOVE_BASKET_ITEM":
      const updatedBasket = state.basketItem.filter(
        (_, index) => index !== action.payload,
      );

      return {
        ...state,
        basketCount: state.basketCount - 1,
        basketItem: updatedBasket,
      };
    case "UPDATE_DAILY_PRICE_BREAKDOWN":
      const updatedBasketItem = state.basketItem.map((item, index) =>
        index === action.payload.index
          ? { ...item, dailyPriceBreakdown: action.payload.dailyPriceBreakdown }
          : item,
      );
      console.log("Updated basket items:", updatedBasketItem);
      return {
        ...state,
        basketItem: updatedBasketItem,
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
