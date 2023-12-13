import PricingCalender from "./PricingCalender";

function PricingRates({
  selectedModel,
  pricing,
  carMakes,
  selectedManufacturer,
}) {
  const carDetails = carMakes[selectedManufacturer].cars[selectedModel];

  return (
    <div className="flex flex-col text-center">
      <h1>{selectedModel}</h1>
      {pricing && (
        <div>
          <div className="flex flex-row gap-5">
            <div>
              <p>24 Hour Rental</p>
              <p>Day Price</p>
              <p>{carDetails.dayRate}</p>
              <p>Price Breakdown</p>
              <p>{carDetails.dayRate} Per Day</p>
              <button className="border-2">Day</button>
              <br />
              <br />
            </div>
            <div>
              <p>Weekly Rental</p>
              <p>Weekly Price</p>
              <p>{carDetails.weekRate()}</p>
              <p>Price Breakdown</p>
              <p>{carDetails.weekRateBreakDown()} Per Day</p>
              <button className="border-2">Week</button>
              <br />
              <br />
            </div>
            <div>
              <p>Monthly Rental (31 days)</p>
              <p>Monthly Price</p>
              <p>{carDetails.monthRate()}</p>
              <p>Price Breakdown</p>
              <p>{carDetails.monthRateBreakDown()} Per Day</p>
              <button className="border-2">Month</button>
            </div>
          </div>
          <div>
            <PricingCalender />
          </div>
        </div>
      )}
    </div>
  );
}

export default PricingRates;
