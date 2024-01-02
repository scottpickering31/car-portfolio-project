export const addToBasket = (rentalDetails) => ({
  type: "ADD_TO_BASKET",
  payload: rentalDetails,
});

export const removeFromBasket = (index) => ({
  type: "REMOVE_BASKET_ITEM",
  payload: index,
});

export const resetBasket = () => ({
  type: "RESET_BASKET",
});

export const updateDailyPriceBreakdown = (index, dailyPriceBreakdown) => ({
  type: "UPDATE_DAILY_PRICE_BREAKDOWN",
  payload: { index, dailyPriceBreakdown },
});
