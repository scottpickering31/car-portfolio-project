const initialState = {
  pricing: false,
  scrollToPricing: false,
};

const pricingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_PRICING_RATES":
      return {
        ...state,
        pricing: !state.pricing,
      };
    case "SCROLL_TO_PRICING":
      return {
        ...state,
        scrollToPricing: !state.scrollToPricing,
      };
    default:
      return state;
  }
};

export default pricingReducer;
