import { useBasket } from "../../../statemanagement/context/BasketContext";

function ShowBasketButton() {
  const { toggleShowBasket } = useBasket();

  return (
    <div>
      <button
        onClick={toggleShowBasket}
        className="bg-customOrange-lighter text-xl font-bold text-white h-20 w-40 py-2 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-orange-400 hover:shadow-lg focus:outline-none focus:ring focus:ring-orange-400 focus:ring-opacity-50"
      >
        View Basket
      </button>
    </div>
  );
}

export default ShowBasketButton;
