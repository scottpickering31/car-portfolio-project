import { useState } from "react";
import "./Calendar.css";
import Calendar from "react-calendar";
import AddToBasketButton from "../Buttons/AddToBasketButton";
import { connect } from "react-redux";
import { addToBasket } from "../../../statemanagement/actions/basketAction";

function CalendarDisplay({
  carMakes,
  selectedManufacturer,
  selectedModel,
  addToBasket,
}) {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [prices, setPrices] = useState([]);
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
    setIsDateSelected(true); // Set the flag to indicate a date has been selected
  };

  const handleRangeChange = (newValue) => {
    onChange(newValue);
    calculatePrices(newValue[0], newValue[1]);
  };

  return (
    <div className="calendar-container">
      <>
        <p>Choose Rental Period</p>
        <Calendar
          selectRange
          onChange={handleRangeChange}
          value={value}
          className="custom-calendar"
        />
        <div>
          {prices.map((dayPrice) => (
            <p key={dayPrice.date.toString()}>
              {dayPrice.date.toDateString()} - £{Math.round(dayPrice.price)}
            </p>
          ))}
        </div>
        {isDateSelected && (
          <AddToBasketButton
            addToBasket={addToBasket} // Pass addToBasket here
            carMakes={carMakes}
            selectedManufacturer={selectedManufacturer}
            selectedModel={selectedModel}
            value={value}
          />
        )}
      </>
    </div>
  );
}
const mapDispatchToProps = {
  addToBasket,
};

export default connect(null, mapDispatchToProps)(CalendarDisplay);
