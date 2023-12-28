function AddToBasketButton({
  addToBasket,
  selectedModel,
  selectedManufacturer,
  carMakes,
  value,
}) {
  const carDetails = carMakes[selectedManufacturer].cars[selectedModel];

  const handleAddToBasket = () => {
    const durationInDays = Math.round(
      (value[1] - value[0]) / (1000 * 60 * 60 * 24),
    );
    console.log(durationInDays);

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
      price: "£" + Math.round(totalPrice),
      duration: durationInDays,
    });
  };

  return (
    <div>
      <button
        onClick={handleAddToBasket}
        className="tracking-wider m-5 bg-green-300 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-green-400 hover:shadow-lg focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50"
      >
        Add To Basket
      </button>
    </div>
  );
}

export default AddToBasketButton;
