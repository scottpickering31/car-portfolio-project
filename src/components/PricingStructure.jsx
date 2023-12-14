import PricingRates from "./ui/PricingRates";
import AddToBasketButton from "./ui/AddToBasketButton";
import BasketContents from "./ui/BasketContents";
import ShowBasketButton from "./ui/ShowBasketButton";
import { useState } from "react";

function PricingStructure({
  selectedModel,
  pricing,
  selectedManufacturer,
  carMakes,
}) {
  const [basketCount, setBasketCount] = useState(0);
  const [basketItem, setBasketItem] = useState([]);
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const randomMath = Math.floor(Math.random() * itemArray.length);
  const itemArray = [
    "Ferrari",
    "Lambourghini",
    "Jaguar",
    "Porsche",
    "Rolls Royce",
  ];

  function addToBasket() {
    setBasketCount(basketCount + 1);
    setBasketItem([...basketItem, itemArray[randomMath]]);
  }

  function resetBasket() {
    setBasketCount(0);
    setBasketItem([]);
  }

  function toggleSideBarShow() {
    toggleSideBar === false ? setToggleSideBar(true) : setToggleSideBar(false);
  }

  return (
    <div>
      <PricingRates
        selectedModel={selectedModel}
        pricing={pricing}
        selectedManufacturer={selectedManufacturer}
        carMakes={carMakes}
      />
      <br></br>
      <div>
        <ShowBasketButton toggleSideBar={toggleSideBarShow} />
        <AddToBasketButton addToBasket={addToBasket} />
        {toggleSideBar && <BasketContents basketItem={basketItem} />}
      </div>
    </div>
  );
}

export default PricingStructure;
