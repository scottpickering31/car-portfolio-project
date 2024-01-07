import { useEffect, useState } from "react";
import BasketItems from "../Basket/BasketItems";
import ResetBasketAmountButton from "../Buttons/ResetBasketAmountButton";
import { useBasket } from "../../../statemanagement/context/BasketContext";
import CheckoutButton from "../Buttons/CheckoutButton";
import React from "react";
import { connect } from "react-redux";

function Basket({ basketItem }) {
  const { toggleBasketShow } = useBasket();
  const { toggleShowBasket } = useBasket();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(toggleBasketShow);
  }, [toggleBasketShow]);

  const totalBasketPrice =
    basketItem && basketItem.length > 0
      ? basketItem.reduce((total, item) => total + item.price, 0)
      : 0;

  return (
    <div className="relative z-20">
      <div
        className={`fixed top-0 right-0 h-full w-5/6 flex justify-end overflow-auto items-start transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0 " : "translate-x-full "
        }`}
      >
        <div className="w-full bg-gray-200 opacity-95 relative p-5">
          <div className="sticky top-0 w-full p-2">
            <img
              src="src/assets/IconScout/arrow-right.svg"
              onClick={toggleShowBasket}
              className="cursor-pointer w-10 h-10 ml-auto mr-4 float-left"
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 999,
              }}
            />
          </div>
          <div>
            <BasketItems />
          </div>
          <div className="sticky bottom-0 w-full flex justify-between mt-4 border border-white bg-white rounded-lg p-5 items-center">
            <ResetBasketAmountButton />
            <p className="text-xl font-bold underline underline-offset-4 tracking-wider">
              Basket Total: £{totalBasketPrice.toLocaleString()}
            </p>
            <CheckoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketItem: state.basket.basketItem,
});

export default connect(mapStateToProps)(Basket);
