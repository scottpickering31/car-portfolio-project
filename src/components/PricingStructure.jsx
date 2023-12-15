import PricingRates from "./ui/PricingRates";
import AddToBasketButton from "./ui/AddToBasketButton";
import ShowBasketButton from "./ui/ShowBasketButton";
import Basket from "./ui/Basket";
import { useState } from "react";

function PricingStructure({
  selectedModel,
  pricing,
  selectedManufacturer,
  carMakes,
  addToBasket,
  basketItem,
  resetBasket,
}) {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  function toggleSideBarShow() {
    setToggleSideBar(!toggleSideBar);
  }

  return (
    <div>
      <div>
        <PricingRates
          selectedModel={selectedModel}
          pricing={pricing}
          selectedManufacturer={selectedManufacturer}
          carMakes={carMakes}
        />
        <br></br>
        {pricing && (
          <div>
            <ShowBasketButton toggleSideBarShow={toggleSideBarShow} />
            <AddToBasketButton addToBasket={addToBasket} />
          </div>
        )}
      </div>
      <div>
        <Basket
          basketItem={basketItem}
          resetBasket={resetBasket}
          toggleSideBar={toggleSideBar}
        />
      </div>
    </div>
  );
}

export default PricingStructure;
