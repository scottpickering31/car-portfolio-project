import { connect } from "react-redux";
import CalendarDisplay from "./PricingCalender";
import "./PricingRates.css";

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
            <div className="text-xs leading-tight bg-gray-100 w-1/4 justify-between flex flex-col rounded-lg shadow-2xl">
              <p className="font-bold bg-gray-100 p-5 h-28 flex items-center justify-center">
                Tariff Details
              </p>
              <p>Insurance Package</p>
              <p>Customer Support</p>
              <p>Allocated Fuel</p>
              <p>Roadside Assistance</p>
              <p>Cancellation</p>
              <p>Pickup/Delivery</p>
              <p>Concierge</p>
              <p>Car Swap +</p>
              <p>Future Discount</p>
              <p>Additional Perks</p>
              <p>Price Breakdown (Daily)</p>
              <br />
              <br />
            </div>
            <div className="text-xs leading-tight w-1/3 bg-bronze justify-between flex flex-col rounded-lg shadow-2xl ">
              <p className="font-bold bg-gray-100 p-5 h-28 flex items-center justify-center">
                Day Rental
              </p>
              <p>Basic</p>
              <p>Basic</p>
              <p>100 Miles</p>
              <p>Basic</p>
              <p>Standard</p>
              <p>Cross</p>
              <p>Cross</p>
              <p>Cross</p>
              <p>Cross</p>
              <p>Cross</p>
              <p>£{carDetails.dayRate} Per Day</p>
              <br />
              <br />
            </div>
            <div className="text-xs leading-tight w-1/3 bg-silver justify-between flex flex-col rounded-lg shadow-2xl">
              <p className="font-bold bg-gray-100 p-5 h-28 flex items-center">
                Weekly Rental (7+ days)
              </p>
              <p>Enhanced</p>
              <p>Priority</p>
              <p>200 Miles</p>
              <p>Extended</p>
              <p>Flexi Plus(+)</p>
              <p>Tick (within 150 miles)</p>
              <p>Tick</p>
              <p>Tick</p>
              <p>Cross</p>
              <p>Cross</p>
              <p>£{Math.round(carDetails.weekRateBreakDown())} Per Day</p>
              <br />
              <br />
            </div>
            <div className="text-xs leading-tight w-1/3 bg-gold justify-between flex flex-col rounded-lg shadow-2xl">
              <p className="font-bold bg-gray-100 p-5 h-28 flex items-center">
                Monthly Rental (31+ days)
              </p>
              <p>Comprehensive</p>
              <p>Dedicated Agent</p>
              <p>400 Miles</p>
              <p>Full</p>
              <p>Flexi Pro(++)</p>
              <p>Tick (within 400 miles)</p>
              <p>Tick</p>
              <p>Tick</p>
              <p>Tick</p>
              <p>Tick</p>
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
