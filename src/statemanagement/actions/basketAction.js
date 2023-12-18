export const addToBasket = (rentalDetails) => ({
  type: "ADD_TO_BASKET",
  payload: rentalDetails,
});


export const resetBasket = () => ({
  type: "RESET_BASKET",
});
