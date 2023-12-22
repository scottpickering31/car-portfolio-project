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
        <div className="w-full bg-gray-200 opacity-95 relative p-5">
          <div className="sticky top-0 w-full p-2">
            <p className="text-sm gray-400">Close Basket</p>
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
          <div className="flex justify-around mt-4">
            <ResetBasketAmountButton />
            <CheckoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
