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
  const [dayPrice, setDayPrice] = useState(0);
  const [tarriffType, setTarriffType] = useState("");
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [tierColor, setTierColor] = useState("");

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
      setTarriffType("Gold Tier Day Rate");
      setTierColor("#D4AF37");
      newPrices = Array.from({ length: days }, (_, index) => ({
        date: new Date(startDate.getTime() + index * oneDay)
          .toISOString()
          .split("T")[0],
        price: carDetails.monthRateBreakDown() * (index + 1),
      }));
      // Calculate the price for each week
    } else if (days >= 7) {
      setTarriffType("Silver Tier Day Rate");
      setTierColor("#C0C0C0");
      newPrices = Array.from({ length: days }, (_, index) => ({
        date: new Date(startDate.getTime() + index * oneDay)
          .toISOString()
          .split("T")[0],
        price: carDetails.weekRateBreakDown() * (index + 1),
      }));
      // Calculate the price for each day
    } else if (days >= 0) {
      setTarriffType("Bronze Tier Day Rate");
      setTierColor("#CD7F32");
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
    setDayPrice(newPrices[0].price);
    setTotal(totalPrice);
    setIsDateSelected(true);
    updateDailyPriceBreakdown(newPrices);
  };

  const handleRangeChange = (newValue) => {
    onChange(newValue);
    calculatePrices(newValue[0], newValue[1]);
  };

  return (
    <div className="bg-gray-200 pt-5 mobile:px-0 mobile:rounded-none mobile:h-full mobilelg:px-0 mobilelg:h-full mobilelg:rounded-none tablet:px-0 tablet:h-full tablet:rounded-r-lg laptop:px-1 laptop:h-large laptop:rounded-r-lg desktop:px-5 desktop:h-large desktop:rounded-r-lg">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h1 className="bg-customBlue font-roboto text-center shadow-2xl p-5 text-white font-semibold tracking-wide rounded-2xl mobile:text-2xl mobile:p-5 tablet:text-2xl tablet:p-5 tablet:w-full laptop:text-sm laptop:p-3 laptop:w-full desktop:text-xl desktop:p-5">
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
            <div className="p-5 bg-customBlue text-white font-semibold tracking-widest rounded-lg w-full shadow-2xl mobile:text-lg mobile:p-5 mobilelg:text-lg mobilelg:p-5 tablet:text-lg tablet:p-5 laptop:text-sm laptop:p-0 desktop:text-lg desktop:p-3">
              <p>Cost for chosen Rental Period:</p>
              <div className="flex flex-col justify-center gap-2 items-center">
                <p
                  className="font-bold w-11/12 rounded-full p-2 mobile:text-xl mobilelg:text-xl tablet:text-2xl laptop:text-xl desktop:text-xl"
                  style={{ backgroundColor: tierColor }}
                >
                  £{total}
                </p>
                <p>
                  (£{Math.ceil(dayPrice)} Per day. {tarriffType})
                </p>
              </div>
            </div>
            <img
              className="hover:scale-110 w-full transition duration-300 cursor-pointer mobile:h-full mobile:p-5 mobilelg:h-1/2 mobilelg:p-5 tablet:p-2 tablet:h-1/2 laptop:p-2 laptop:h-1/2 desktop:p-1 desktop:h-1/2 widescreen:w-3/4"
              src={carDetails.image}
            />
            <div className="flex flex-row items-center mobile:w-full gap-10 mobile:justify-center mobile:p-5 mobilelg:w-full mobilelg:p-5 mobilelg:justify-center tablet:w-auto tablet:p-5 tablet:justify-end laptop:w-auto laptop:p-0 laptop:justify-end desktop:p-0 desktop:w-auto desktop:justify-end">
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
