import PricingRates from "./PricingRates";
import AddToBasketButton from "../Buttons/AddToBasketButton";
import ShowBasketButton from "../Buttons/ShowBasketButton";
import { useState, createContext, useContext } from "react";

function PricingStructure({
  selectedModel,
  pricing,
  selectedManufacturer,
  carMakes,
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
            <AddToBasketButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default PricingStructure;
