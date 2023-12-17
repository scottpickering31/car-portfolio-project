import React, { createContext, useState, useContext } from "react";

const BasketContext = createContext();

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};

export const BasketProvider = ({ children }) => {
  const [toggleBasketShow, setToggleBasketShow] = useState(false);

  const toggleShowBasket = () => {
    setToggleBasketShow((prevState) => !prevState);
  };

  const value = {
    toggleBasketShow,
    toggleShowBasket,
  };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

export default BasketContext;
