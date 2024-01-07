import React from "react";
import { connect } from "react-redux";
import { useBasket } from "../../../statemanagement/context/BasketContext";

function BasketIcon({ basketCount, pricing }) {
  const { toggleShowBasket } = useBasket();

  if (!pricing) {
    return null; // Return nothing if pricing is false
  }

  return (
    <div className="flex flex-start flex-col items-center text-2xl p-5">
      <i
        onClick={toggleShowBasket}
        className="fa fa-shopping-basket cursor-pointer hover:scale-150 duration-100 "
        style={{ color: "rgb(255, 140, 40)" }}
      ></i>
      <p className="text-center">{basketCount}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    basketCount: state.basket.basketCount,
    pricing: state.price.pricing,
  };
};

export default connect(mapStateToProps)(BasketIcon);
