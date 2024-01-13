import { useBasket } from "../../../statemanagement/context/BasketContext";

function ShowBasketButton() {
  const { toggleShowBasket } = useBasket();

  return (
    <div>
      <button
        onClick={toggleShowBasket}
        className="bg-customOrange-lighter font-bold text-white h-20 w-40 py-2 px-4 mobile:h-14 mobile:text-sm mobile:w-28 mobilelg:text-sm mobilelg:h-14 mobilelg:w-28 tablet:h-20 tablet:w-40 tablet:text-xl laptop:h-20 laptop:w-40 laptop:text-xl desktop:h-20 desktop:w-40 desktop:text-xl rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-orange-400 hover:shadow-lg focus:outline-none focus:ring focus:ring-orange-400 focus:ring-opacity-50"
      >
        View Basket
      </button>
    </div>
  );
}

export default ShowBasketButton;
