import { useBasket } from "../../../statemanagement/context/BasketContext";

function ShowBasketButton() {
  const { toggleShowBasket } = useBasket();

  return (
    <div>
      <button
        onClick={toggleShowBasket}
        className="relative bg-orange-400 mobile:h-14 mobile:text-sm mobile:w-32 mobilelg:text-sm mobilelg:h-14 mobilelg:w-32 tablet:h-20 tablet:w-40 tablet:text-xl laptop:h-14 laptop:w-32 laptop:text-sm desktop:h-20 desktop:w-40 desktop:text-lg text-white font-bold p-2 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-orange-500 hover:shadow-lg focus:outline-none focus:ring focus:ring-orange-400 focus:ring-opacity-50 active:bg-green-900"
      >
        View Basket
      </button>
    </div>
  );
}

export default ShowBasketButton;
