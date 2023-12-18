import React from "react";
import { connect } from "react-redux";
import { useBasket } from "../../../statemanagement/context/BasketContext";

function BasketIcon({ basketCount }) {
  const { toggleShowBasket } = useBasket();
  return (
    <div className="flex flex-start flex-col items-center text-2xl p-3">
      <i
        onClick={toggleShowBasket}
        className="fa fa-shopping-basket cursor-pointer"
        style={{ color: "rgb(255, 140, 40" }}
      ></i>
      <p className="text-center">{basketCount}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basketCount: state.basket.basketCount,
  };
};

export default connect(mapStateToProps)(BasketIcon);
