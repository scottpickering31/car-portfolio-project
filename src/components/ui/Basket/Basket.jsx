import BasketItems from "../Basket/BasketItems";
import ResetBasketAmount from "../Buttons/ResetBasketAmountButton";

function Basket({ toggleSideBar }) {
  return (
    <div className="flex h-96 justify-end">
      {toggleSideBar && (
        <div>
          <BasketItems />
          <ResetBasketAmount />
        </div>
      )}
    </div>
  );
}

export default Basket;
