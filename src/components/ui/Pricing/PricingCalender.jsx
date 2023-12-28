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
    <div className="bg-gray-200 rounded-r-lg px-5 pt-5 h-screen">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h1 className="bg-customOrange-darker text-center p-5 text-2xl text-white font-bold tracking-wide">
          Choose Rental Period Range
        </h1>
        <Calendar selectRange onChange={handleRangeChange} value={value} />
        {isDateSelected && (
          <div className="flex flex-col items-center">
            <p className="p-5 bg-customOrange-lighter text-white font-bold tracking-wide rounded-lg w-full text-lg mt-10">
              Total Cost for Rented Period: £{total}
            </p>
            <img className="h-60 w-96" src={carDetails.image} />
            <div className="flex flex-row items-center justify-end">
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
};

export default connect(null, mapDispatchToProps)(CalendarDisplay);
