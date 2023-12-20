const initialState = {
  pricing: false,
};

const pricingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_PRICING_RATES":
      return {
        ...state,
        pricing: !state,
      };
    default:
      return state;
  }
};

export default pricingReducer;
