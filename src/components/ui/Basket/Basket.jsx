import { useEffect, useState } from "react";
import BasketItems from "../Basket/BasketItems";
import ResetBasketAmountButton from "../Buttons/ResetBasketAmountButton";
import { useBasket } from "../../../statemanagement/context/BasketContext";
import CheckoutButton from "../Buttons/CheckoutButton";
// import SeeCostBreakDown from "../Buttons/SeeCostBreakDown";

function Basket() {
  const { toggleBasketShow } = useBasket();
  const { toggleShowBasket } = useBasket();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(toggleBasketShow);
  }, [toggleBasketShow]);

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
            <p>Basket Total: </p>
            <CheckoutButton />
            {/* <SeeCostBreakDown /> */}
            <div>
              {/* {hidden && (
                <>
                  {prices.map((dayPrice) => (
                    <p key={dayPrice.date.toString()}>
                      {dayPrice.date.toDateString()} - £
                      {Math.round(dayPrice.price)}
                    </p>
                  ))}
                </>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
