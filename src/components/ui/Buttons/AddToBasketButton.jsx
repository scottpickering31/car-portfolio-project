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
      price: "£" + Math.round(totalPrice),
      duration: durationInDays,
    });
  };

  return (
    <div>
      <button
        style={{ margin: "20px", display: "inline-block" }}
        onClick={handleAddToBasket}
      >
        Add To Basket
      </button>
    </div>
  );
}

export default AddToBasketButton;
