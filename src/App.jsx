import CarPickerForm from "./components/CarPickerForm.jsx";
import Header from "./containers/Header.jsx";
import HowItWorksSection from "./containers/HowItWorks.jsx";
import { useState } from "react";

export default function App() {
  const [basketCount, setBasketCount] = useState(0);
  const [basketItem, setBasketItem] = useState([]);

  const itemArray = [
    "Ferrari",
    "Lambourghini",
    "Jaguar",
    "Porsche",
    "Rolls Royce",
  ];
  const randomMath = Math.floor(Math.random() * itemArray.length);

  function addToBasket() {
    setBasketCount(basketCount + 1);
    setBasketItem([...basketItem, itemArray[randomMath]]);
  }

  function resetBasket() {
    setBasketCount(0);
    setBasketItem([]);
  }
  return (
    <div>
      <Header basketCount={basketCount} />
      <HowItWorksSection />
      <CarPickerForm
        basketItem={basketItem}
        addToBasket={addToBasket}
        resetBasket={resetBasket}
      />
    </div>
  );
}
