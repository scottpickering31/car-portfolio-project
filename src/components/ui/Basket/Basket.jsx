import BasketItems from "./BasketItems";
import ResetBasketAmount from "../Buttons/ResetBasketAmountButton";
import React, { useState } from "react";

function Basket({ toggleSideBar }) {
  const [basketCount, setBasketCount] = useState(0);
  const [basketItem, setBasketItem] = useState([]);

  function addToBasket() {
    setBasketCount(basketCount + 1);
    setBasketItem([...basketItem, itemArray[randomMath]]);
  }

  function resetBasket() {
    setBasketCount(0);
    setBasketItem([]);
  }

  return (
    <div className="flex h-96 justify-end">
      {toggleSideBar && (
        <div>
          <BasketItems basketItem={basketItem} />
          <ResetBasketAmount resetBasket={resetBasket} />
        </div>
      )}
    </div>
  );
}

export default Basket;
