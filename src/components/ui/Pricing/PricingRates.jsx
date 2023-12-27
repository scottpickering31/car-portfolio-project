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
    <div className="border border-gray-400 w-auto p-5 bg-white rounded-b-lg shadow-2xl">
      <div className="flex flex-col items-center text-center p-5">
        <h1 className="pb-5 text-3xl font-bold">{selectedModel}</h1>
        <div className="flex gap-12 flex-row">
          <div className="flex bg-gray-200 rounded-lg text-center p-6 gap-5 text-black flex-row">
            <div className="flex flex-col justify-between bg-bronze w-1/3">
              <p className="font-bold bg-gray-100 p-5 h-20">Day Rental</p>
              <p>Day Price</p>
              <p>{carDetails.dayRate}</p>
              <p>Price Breakdown</p>
              <p>{carDetails.dayRate} Per Day</p>
              <br />
              <br />
            </div>
            <div className="flex flex-col justify-between bg-silver w-1/3">
              <p className="font-bold bg-gray-100 p-5 h-20">
                Weekly Rental (7+ days)
              </p>
              <p>Weekly Price</p>
              <p>{carDetails.weekRate()}</p>
              <p>Price Breakdown</p>
              <p>{Math.round(carDetails.weekRateBreakDown())} Per Day</p>
              <br />
              <br />
            </div>
            <div className="flex flex-col justify-between bg-gold w-1/3">
              <p className="font-bold bg-gray-100 p-5 h-20">
                Monthly Rental (31+ days)
              </p>
              <p>Monthly Price</p>
              <p>{carDetails.monthRate()}</p>
              <p>Price Breakdown</p>
              <p>{Math.round(carDetails.monthRateBreakDown())} Per Day</p>
            </div>
          </div>
          <div className="flex justify-center">
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
