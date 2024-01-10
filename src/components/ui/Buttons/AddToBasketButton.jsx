import { React, useState } from "react";
import { connect } from "react-redux";
import { addToBasket } from "../../../statemanagement/actions/basketAction";

function AddToBasketButton({
  addToBasket,
  selectedModel,
  selectedManufacturer,
  carMakes,
  value,
}) {
  const [notification, setNotification] = useState("");
  const carDetails = carMakes[selectedManufacturer].cars[selectedModel];

  const handleAddToBasket = () => {
    const durationInDays = Math.round(
      (value[1] - value[0]) / (1000 * 60 * 60 * 24)
    );

    let totalPrice = 0;

    if (durationInDays >= 31) {
      totalPrice = carDetails.monthRateBreakDown() * durationInDays;
    } else if (durationInDays >= 7) {
      totalPrice = carDetails.weekRateBreakDown() * durationInDays;
    } else {
      totalPrice = carDetails.dayRate * durationInDays;
    }

    addToBasket({
      manufacturer: selectedManufacturer,
      model: selectedModel,
      image: carDetails.image,
      price: Math.round(totalPrice),
      duration: durationInDays,
    });

    setNotification(`Added ${selectedModel} to basket`);
    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleAddToBasket}
        className="relative tracking-wider text-xl h-20 w-40 bg-green-400 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-green-500 hover:shadow-lg focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50 active:bg-green-900"
      >
        Add To Basket
      </button>

      {notification && (
        <div
          className="bg-customBeige text-black p-2 rounded-md absolute -top-full transform translate-x-12 mb-4"
          style={{ minWidth: "200px" }}
        >
          {notification}
        </div>
      )}
    </div>
  );
}

export default connect(null, { addToBasket })(AddToBasketButton);
