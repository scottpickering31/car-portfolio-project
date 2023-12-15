import BasketContents from "./BasketContents";
import ResetBasketAmount from "./ResetBasketAmount";
import React from "react";

function Basket({ resetBasket, basketItem, toggleSideBar }) {
  return (
    <div className="flex h-96 justify-end">
      {toggleSideBar && (
        <div>
          <BasketContents basketItem={basketItem} />
          <ResetBasketAmount resetBasket={resetBasket} />
        </div>
      )}
    </div>
  );
}

export default Basket;
