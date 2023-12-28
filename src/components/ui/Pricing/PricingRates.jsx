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
    <div className="border mt-10 w-auto p-5 bg-white rounded-lg shadow-2xl">
      <div className="flex flex-col items-center text-center">
        <h1 className="pb-5 text-3xl font-bold">
          {selectedModel} - Cost Breakdown
        </h1>
        <div className="flex flex-row">
          <div className="flex h-screen bg-gray-200 border border-r-black rounded-l-lg text-center p-6 gap-5 text-black flex-row justify-between ">
            <div className="w-1/3 bg-silver justify-between flex flex-col rounded-lg shadow-2xl">
              <p className="font-bold bg-gray-100 p-5 h-28 flex items-center justify-center">
                Offers
              </p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <br />
              <br />
            </div>
            <div className="w-1/5 bg-bronze justify-between flex flex-col rounded-lg shadow-2xl ">
              <p className="font-bold bg-gray-100 p-5 h-28 flex items-center justify-center">
                Day Rental
              </p>
              <p className="bg-white">Daily Price</p>
              <p>£{carDetails.dayRate}</p>
              <p>Price Breakdown</p>
              <p>£{carDetails.dayRate} Per Day</p>
              <br />
              <br />
            </div>
            <div className="w-1/5 bg-silver justify-between flex flex-col rounded-lg shadow-2xl">
              <p className="font-bold bg-gray-100 p-5 h-28">
                Weekly Rental (7+ days)
              </p>
              <p className="bg-white">Weekly Price</p>
              <p>£{carDetails.weekRate()}</p>
              <p>Price Breakdown</p>
              <p>£{Math.round(carDetails.weekRateBreakDown())} Per Day</p>
              <br />
              <br />
            </div>
            <div className="w-1/5 bg-gold justify-between flex flex-col rounded-lg shadow-2xl">
              <p className="font-bold bg-gray-100 p-5 h-28">
                Monthly Rental (31+ days)
              </p>
              <p className="bg-white">Monthly Price</p>
              <p>£{carDetails.monthRate()}</p>
              <p>Price Breakdown</p>
              <p>£{Math.round(carDetails.monthRateBreakDown())} Per Day</p>
              <br />
              <br />
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
