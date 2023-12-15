import React from "react";

function ResetBasketAmount({ resetBasket }) {
  return (
    <div>
      <button onClick={resetBasket}>Reset Basket</button>
    </div>
  );
}

export default ResetBasketAmount;
