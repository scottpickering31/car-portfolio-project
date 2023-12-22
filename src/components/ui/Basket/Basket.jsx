import { useEffect, useState } from "react";
import BasketItems from "../Basket/BasketItems";
import ResetBasketAmountButton from "../Buttons/ResetBasketAmountButton";
import { useBasket } from "../../../statemanagement/context/BasketContext";
import CheckoutButton from "../Buttons/CheckoutButton";

function Basket() {
  const { toggleBasketShow } = useBasket();
  const { toggleShowBasket } = useBasket();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(toggleBasketShow);
  }, [toggleBasketShow]);

  return (
    <div className="relative">
      <div
        className={`fixed top-0 right-0 h-full w-5/6 flex justify-end items-start transition-transform duration-300 ease-in-out overflow-auto ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full h-full bg-gray-200 opacity-95">
          <div className="w-1/2 p-5">
            <BasketItems />
            <img
              src="src/assets/IconScout/arrow-right.svg"
              onClick={toggleShowBasket}
              className="cursor-pointer h-full w-1/3"
            />
            <div className="flex justify-between flex-row">
              <ResetBasketAmountButton />
              <CheckoutButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
