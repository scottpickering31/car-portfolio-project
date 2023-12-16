import React from "react";

function ResetBasketAmountButton({ resetBasket }) {
  return (
    <div>
      <button onClick={resetBasket}>Reset Basket</button>
    </div>
  );
}

export default ResetBasketAmountButton;
