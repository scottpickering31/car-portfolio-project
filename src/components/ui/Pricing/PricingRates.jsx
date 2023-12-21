import { connect } from "react-redux";
import CalendarDisplay from "./PricingCalender";

function PricingRates({
  selectedModel,
  carMakes,
  selectedManufacturer,
  pricing,
}) {
  const carDetails = carMakes[selectedManufacturer].cars[selectedModel];

  if (!pricing) {
    return null;
  }

  return (
    <div className="flex flex-row h-full border border-gray-400 w-11/12 p-5 bg-white rounded-b-lg shadow-2xl">
      <div className="flex flex-col items-center text-center">
        <h1>{selectedModel}</h1>
        <div className="flex justify-between items-center gap-12">
          <div className="flex justify-center">
            <div className="p-4 rounded-lg text-black ">
              <p className="text-center">24 Hour Rental</p>
              <p>Day Price</p>
              <p>{carDetails.dayRate}</p>
              <p>Price Breakdown</p>
              <p>{carDetails.dayRate} Per Day</p>
              <br />
              <br />
            </div>
            <div className="p-4 rounded-lg text-black">
              <p className="text-center">Weekly Rental (7+ days)</p>
              <p>Weekly Price</p>
              <p>{carDetails.weekRate()}</p>
              <p>Price Breakdown</p>
              <p>{Math.round(carDetails.weekRateBreakDown())} Per Day</p>
              <br />
              <br />
            </div>
            <div className="p-4 rounded-lg text-black bg-gold">
              <p className="text-center">Monthly Rental (31+ days)</p>
              <p>Monthly Price</p>
              <p>{carDetails.monthRate()}</p>
              <p>Price Breakdown</p>
              <p>{Math.round(carDetails.monthRateBreakDown())} Per Day</p>
            </div>
          </div>
          <div>
            <CalendarDisplay
              selectedModel={selectedModel}
              selectedManufacturer={selectedManufacturer}
              carMakes={carMakes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pricing: state.price.pricing,
});

export default connect(mapStateToProps)(PricingRates);
