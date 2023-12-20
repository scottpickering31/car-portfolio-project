import { useState } from "react";
import Calendar from "react-calendar";
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
        <button onClick={togglePriceBreakdown}>Choose Rental Period</button>
        <Calendar selectRange onChange={handleRangeChange} value={value} />
        <div>
          <p>Total Cost for Rented Period of: £{total}</p>
          <button onClick={togglePriceBreakdown}>
            See Detailed Cost Breakdown
          </button>
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
