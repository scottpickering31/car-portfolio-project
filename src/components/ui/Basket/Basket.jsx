import BasketItems from "../Basket/BasketItems";
import ResetBasketAmount from "../Buttons/ResetBasketAmountButton";
import { useBasket } from "../../../statemanagement/context/BasketContext";

function Basket() {
  const { toggleBasketShow } = useBasket();

  return (
    <div className="relative">
      {toggleBasketShow && (
        <div className="fixed top-0 right-0 h-full w-2/3 flex justify-end items-start">
          <div className="w-full h-full bg-gray-200 opacity-80">
            <div className="w-1/3 p-5">
              <BasketItems />
              <ResetBasketAmount />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
