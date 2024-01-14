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
    <div className="relative z-20 h-full">
      <div
        className={`fixed top-0 right-0 h-full flex justify-end overflow-auto items-start transition-transform duration-300 ease-in-out mobile:w-full mobilelg:w-full tablet:w-full laptop:w-5/6 desktop:w-5/6 ${
          isVisible ? "translate-x-0 " : "translate-x-full "
        }`}
      >
        <div className="w-full bg-gray-200 opacity-95 relative mobile:p-0 mobile:opacity-100 mobilelg:p-0 mobilelg:opacity-100 tablet:opacity-100 tablet:p-0 laptop:p-5 laptop:opacity-95 desktop:p-5 desktop:opacity-95">
          <div className="sticky top-0 w-full p-2">
            <img
              src="/images/cross.png"
              onClick={toggleShowBasket}
              className="cursor-pointer w-10 h-10 ml-auto mr-4 float-left hover:scale-150 transition duration-100"
            />
          </div>
          <div>
            <BasketItems />
          </div>
          <div className="sticky bottom-0 w-full flex flex-col justify-around mt-4 border border-white bg-white items-center mobile:p-0 mobile:rounded-none mobilelg:p-0 mobilelg:rounded-none tablet:p-5 tablet:rounded-lg laptop:p-5 laptop:rounded-lg desktop:p-5 desktop:rounded-lg">
            <div className="flex flex-row items-center gap-3 text-sm font-genos mobile:p-5 mobilelg:p-5 tablet:p-0 laptop:p-0 desktop:p-0">
              <p className="font-bold tracking-widest mobile:text-xl mobilelg:text-xl tablet:text-2xl laptop:text-2xl desktop:text-2xl">
                Basket Total:
              </p>
              <p className="underline text-5xl tracking-widest font-bold underline-offset-4 mobile:text-xl mobilelg:text-xl tablet:text-2xl laptop:text-4xl desktop:text-4xl ">
                £{totalBasketPrice.toLocaleString()}
              </p>
            </div>
            <div className="flex flex-row mobile:p-2 mobile:gap-2 mobilelg:p-2 mobilelg:gap-2 tablet:p-5 tablet:gap-14 laptop:p-5 laptop:gap-14 desktop:gap-14 desktop:p-5">
              <ResetBasketAmountButton />
              <CheckoutButton />
            </div>
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
