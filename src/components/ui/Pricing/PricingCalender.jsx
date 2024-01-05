import { useState } from "react";
import Calendar from "react-calendar";
import ShowBasketButton from "../Buttons/ShowBasketButton";
import AddToBasketButton from "../Buttons/AddToBasketButton";
import { connect } from "react-redux";
import { addToBasket } from "../../../statemanagement/actions/basketAction";
import { updateDailyPriceBreakdown } from "../../../statemanagement/actions/basketAction";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

function CalendarDisplay({
  carMakes,
  selectedManufacturer,
  selectedModel,
  addToBasket,
  updateDailyPriceBreakdown,
}) {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [total, setTotal] = useState(0);
  const [isDateSelected, setIsDateSelected] = useState(false);

  // Get the car details for the selected car
  const carDetails = carMakes[selectedManufacturer].cars[selectedModel];

  // Calculate the price per day
  const pricePerDay = carDetails.dayRate;

  //   Calculate the total price based on the selected dates
  const calculatePrices = (startDate, endDate) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const days = Math.round(Math.abs((startDate - endDate) / oneDay));

    let newPrices = [];
    //     Calculate the price for each month
    if (days >= 31) {
      newPrices = Array.from({ length: days }, (_, index) => ({
        date: new Date(startDate.getTime() + index * oneDay),
        price: carDetails.monthRateBreakDown() * (index + 1),
      }));
      // Calculate the price for each week
    } else if (days >= 7) {
      newPrices = Array.from({ length: days }, (_, index) => ({
        date: new Date(startDate.getTime() + index * oneDay),
        price: carDetails.weekRateBreakDown() * (index + 1),
      }));
      // Calculate the price for each day
    } else {
      newPrices = Array.from({ length: days }, (_, index) => ({
        date: new Date(startDate.getTime() + index * oneDay),
        price: pricePerDay * (index + 1),
      }));
    }
    //     Calculate the total price
    const totalPrice =
      newPrices.length > 0
        ? Math.round(newPrices[newPrices.length - 1].price)
        : 0;
    //     Update the total price
    setTotal(totalPrice);
    setIsDateSelected(true);
  };

  const handleRangeChange = (newValue) => {
    onChange(newValue);
    calculatePrices(newValue[0], newValue[1]);
    updateDailyPriceBreakdown(calculatePrices(newValue[0], newValue[1]));
  };

  return (
    <div className="bg-gray-200 rounded-r-lg px-5 pt-5 h-large">
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <h1 className="bg-customBlue text-center shadow-2xl p-5 text-2xl text-white font-semibold tracking-wide rounded-full">
          Step 2 - Choose Rental Period
        </h1>
        <Calendar selectRange onChange={handleRangeChange} value={value} />
        {isDateSelected && (
          <div className="flex flex-col items-center">
            <div className="p-5 bg-customBlue text-white font-semibold tracking-widest rounded-lg w-full text-lg gap-10 shadow-2xl ">
              <p>Cost for chosen Rental Period:</p>
              <p className="text-3xl font-bold">£{total}</p>
            </div>
            <img
              className="h-60 w-full p-5 hover:scale-110 transition duration-300 cursor-pointer"
              src={carDetails.image}
            />
            <div className="flex flex-row items-center justify-end gap-10">
              <AddToBasketButton
                addToBasket={addToBasket}
                carMakes={carMakes}
                selectedManufacturer={selectedManufacturer}
                selectedModel={selectedModel}
                value={value}
              />
              <ShowBasketButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
const mapDispatchToProps = {
  addToBasket,
  updateDailyPriceBreakdown,
};

export default connect(null, mapDispatchToProps)(CalendarDisplay);
