import { useState } from "react";
import Calendar from "react-calendar";
import ShowBasketButton from "../Buttons/ShowBasketButton";
import AddToBasketButton from "../Buttons/AddToBasketButton";
import { connect } from "react-redux";
import { addToBasket } from "../../../statemanagement/actions/basketAction";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

function CalendarDisplay({
  carMakes,
  selectedManufacturer,
  selectedModel,
  addToBasket,
}) {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [prices, setPrices] = useState([]);
  const [total, setTotal] = useState(0);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [hidden, setHidden] = useState(false);

  function togglePriceBreakdown() {
    setHidden(!hidden);
  }

  const carDetails = carMakes[selectedManufacturer].cars[selectedModel];

  const pricePerDay = carDetails.dayRate;

  const calculatePrices = (startDate, endDate) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const days = Math.round(Math.abs((startDate - endDate) / oneDay));

    let newPrices = [];

    if (days >= 31) {
      newPrices = Array.from({ length: days }, (_, index) => ({
        date: new Date(startDate.getTime() + index * oneDay),
        price: carDetails.monthRateBreakDown() * (index + 1),
      }));
    } else if (days >= 7) {
      newPrices = Array.from({ length: days }, (_, index) => ({
        date: new Date(startDate.getTime() + index * oneDay),
        price: carDetails.weekRateBreakDown() * (index + 1),
      }));
    } else {
      newPrices = Array.from({ length: days }, (_, index) => ({
        date: new Date(startDate.getTime() + index * oneDay),
        price: pricePerDay * (index + 1),
      }));
    }

    setPrices(newPrices);

    const totalPrice =
      newPrices.length > 0
        ? Math.round(newPrices[newPrices.length - 1].price)
        : 0;

    setTotal(totalPrice);
    setIsDateSelected(true);
  };

  const handleRangeChange = (newValue) => {
    onChange(newValue);
    calculatePrices(newValue[0], newValue[1]);
  };

  return (
    <div>
      <>
        <h1 className="bg-gray-400 text-center p-5 text-2xl text-customOrange-lighter font-bold tracking-wide">
          Choose Rental Period Range
        </h1>
        <Calendar selectRange onChange={handleRangeChange} value={value} />
        <div>
          {hidden && (
            <>
              {prices.map((dayPrice) => (
                <p key={dayPrice.date.toString()}>
                  {dayPrice.date.toDateString()} - £{Math.round(dayPrice.price)}
                </p>
              ))}
            </>
          )}
        </div>
        {isDateSelected && (
          <div className="flex flex-row items-center justify-center">
            <p className="p-5">Total Cost for Rented Period of: £{total}</p>
            <button
              onClick={togglePriceBreakdown}
              className="bg-orange-300 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-orange-400 hover:shadow-lg focus:outline-none focus:ring focus:ring-orange-400 focus:ring-opacity-50"
            >
              See Detailed Cost Breakdown
            </button>
            <AddToBasketButton
              addToBasket={addToBasket}
              carMakes={carMakes}
              selectedManufacturer={selectedManufacturer}
              selectedModel={selectedModel}
              value={value}
            />
            <ShowBasketButton />
          </div>
        )}
      </>
    </div>
  );
}
const mapDispatchToProps = {
  addToBasket,
};

export default connect(null, mapDispatchToProps)(CalendarDisplay);
