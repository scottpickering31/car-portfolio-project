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
      {pricing && (
        <div>
          <h1>{selectedModel}</h1>
          <div>
            <div className="flex flex-row gap-5">
              <div>
                <p>24 Hour Rental</p>
                <p>Day Price</p>
                <p>{carDetails.dayRate}</p>
                <p>Price Breakdown</p>
                <p>{carDetails.dayRate} Per Day</p>
                <br />
                <br />
              </div>
              <div>
                <p>Weekly Rental (7+ days)</p>
                <p>Weekly Price</p>
                <p>{carDetails.weekRate()}</p>
                <p>Price Breakdown</p>
                <p>{Math.round(carDetails.weekRateBreakDown())} Per Day</p>
                <br />
                <br />
              </div>
              <div>
                <p>Monthly Rental (31+ days)</p>
                <p>Monthly Price</p>
                <p>{carDetails.monthRate()}</p>
                <p>Price Breakdown</p>
                <p>{Math.round(carDetails.monthRateBreakDown())} Per Day</p>
              </div>
            </div>
            <div>
              <PricingCalender
                selectedModel={selectedModel}
                selectedManufacturer={selectedManufacturer}
                carMakes={carMakes}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PricingRates;
