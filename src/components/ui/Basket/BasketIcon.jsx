import React from "react";
import { connect } from "react-redux";
import { useBasket } from "../../../statemanagement/context/BasketContext";

function BasketIcon({ basketCount, pricing }) {
  const { toggleShowBasket } = useBasket();

  if (!pricing) {
    return null;
  }

  return (
    <div
      className="flex flex-start flex-row gap-2 items-center text-2xl p-4 rounded-full bg-gray-100/70 border border-gray-300 mobile:text-lg"
      onClick={toggleShowBasket}
    >
      <i
        className="fa fa-shopping-basket cursor-pointer hover:scale-150 duration-100 "
        style={{ color: "rgb(255, 140, 40)" }}
      ></i>
      <p className="text-center font-genos mobile:text-xl mobilelg:text-xl tablet:text-2xl laptop:text-4xl desktop:text-4xl">
        {basketCount}
      </p>
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
