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
        date: new Date(startDate.getTime() + index * oneDay)
          .toISOString()
          .split("T")[0],
        price: carDetails.monthRateBreakDown() * (index + 1),
      }));
      // Calculate the price for each week
    } else if (days >= 7) {
      newPrices = Array.from({ length: days }, (_, index) => ({
        date: new Date(startDate.getTime() + index * oneDay)
          .toISOString()
          .split("T")[0],
        price: carDetails.weekRateBreakDown() * (index + 1),
      }));
      // Calculate the price for each day
    } else {
      newPrices = Array.from({ length: days }, (_, index) => ({
        date: new Date(startDate.getTime() + index * oneDay)
          .toISOString()
          .split("T")[0],
        price: pricePerDay * (index + 1),
      }));
    }
    //     Calculate the total price
    let totalPrice =
      newPrices.length > 0
        ? Math.round(newPrices[newPrices.length - 1].price).toLocaleString()
        : 0;
    //     Update the total price
    setTotal(totalPrice);
    setIsDateSelected(true);
    updateDailyPriceBreakdown(newPrices);
    console.log(newPrices);
  };

  const handleRangeChange = (newValue) => {
    onChange(newValue);
    calculatePrices(newValue[0], newValue[1]);
  };

  return (
    <div className="bg-gray-200 pt-5 mobile:px-0 mobile:rounded-none mobile:h-full mobilelg:px-0 mobilelg:h-full mobilelg:rounded-none tablet:px-0 tablet:h-full tablet:rounded-r-lg laptop:px-5 laptop:h-large laptop:rounded-r-lg desktop:px-5 desktop:h-large desktop:rounded-r-lg">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h1 className="bg-customBlue font-roboto text-center shadow-2xl p-5 text-2xl text-white font-semibold tracking-wide rounded-2xl">
          STEP 2: CHOOSE RENTAL PERIOD
        </h1>
        <Calendar
          selectRange
          onChange={handleRangeChange}
          value={value}
          className="w-full"
        />
        {isDateSelected && (
          <div className="flex flex-col items-center w-full">
            <div className="p-5 bg-customBlue text-white font-semibold tracking-widest rounded-lg w-full text-lg shadow-2xl ">
              <p>Cost for chosen Rental Period:</p>
              <p className="font-bold mobile:text-xl mobilelg:text-xl tablet:text-2xl laptop:text-3xl desktop:text-3xl">
                £{total}
              </p>
            </div>
            <img
              className="w-3/4 p-5 hover:scale-110 transition duration-300 cursor-pointer mobile:h-full mobilelg:h-full tablet:h-60 laptop:h-60 desktop:h-60"
              src={carDetails.image}
            />
            <div className="flex flex-row items-center mobile:w-full gap-10 p-5 mobile:justify-center mobilelg:w-full mobilelg:justify-center tablet:w-auto tablet:justify-end laptop:w-auto laptop:justify-end desktop:w-auto desktop:justify-end">
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

const mapDispatchToProps = (dispatch) => ({
  addToBasket,
  updateDailyPriceBreakdown: (dailyPriceBreakdown) =>
    dispatch(updateDailyPriceBreakdown(dailyPriceBreakdown)),
});

export default connect(null, mapDispatchToProps)(CalendarDisplay);
