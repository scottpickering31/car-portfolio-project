import { useBasket } from "../../../statemanagement/context/BasketContext";

function ShowBasketButton() {
  const { toggleShowBasket } = useBasket();

  return (
    <div>
      <button onClick={toggleShowBasket}>View Basket</button>
    </div>
  );
}

export default ShowBasketButton;
