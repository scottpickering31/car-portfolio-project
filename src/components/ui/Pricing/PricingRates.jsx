import { connect } from "react-redux";
import CalendarDisplay from "./PricingCalender";
import "./PricingRates.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { toolTipObj } from "./PricingToolTipData";
import { useState } from "react";

function PricingRates({
  selectedModel,
  carMakes,
  selectedManufacturer,
  pricing,
}) {
  const [tooltip, setTooltip] = useState("");

  const toolTipIcon = (
    <FontAwesomeIcon icon={faCircleExclamation} className="flex items-end" />
  );

  const carDetails = carMakes[selectedManufacturer].cars[selectedModel];
  const logo = carMakes[selectedManufacturer].logo;

  if (!pricing) {
    return null;
  }

  return (
    <div className="border mt-10 w-auto p-5 bg-white rounded-lg shadow-2xl">
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-row items-center gap-5">
          <img src={logo} className="w-28 mb-5" alt="Car Logo" />
          <h1 className="pb-5 text-3xl font-bold">
            {selectedModel} - Cost Breakdown
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="flex h-large bg-gray-200 border border-r-black rounded-l-lg text-center p-3 gap-5 text-black flex-row justify-between">
            <div className="text-xs leading-tight bg-gray-150 w-1/4 justify-between flex flex-col rounded-lg shadow-2xl">
              <p className="font-bold bg-gray-100 p-5 !h-28 flex items-center justify-center">
                Tariff Details
              </p>
              <p>Insurance Package</p>
              <p>Customer Support</p>
              <p>Allocated Fuel</p>
              <p>Roadside Assistance</p>
              <p>Cancellation</p>
              <p>Pickup/Delivery</p>
              <p>Concierge</p>
              <p>Car Swap</p>
              <p>Future Discount</p>
              <p>Additional Perks</p>
              <p>Pricing</p>
              <br />
              <br />
            </div>
            <div className="text-md leading-tight w-1/3 bg-bronze justify-between flex flex-col rounded-lg shadow-2xl ">
              <p className="font-bold bg-gray-100 p-5 !h-28 flex items-center justify-center">
                Bronze <br /> (Day Rental)
              </p>
              <p>Basic</p>
              <p>Basic</p>
              <p>100 Miles</p>
              <p>Basic</p>
              <p>Standard</p>
              <p className="text-red-400 text-3xl">
                <FontAwesomeIcon icon={faXmark} />
              </p>
              <p className="text-red-400 text-3xl">
                <FontAwesomeIcon icon={faXmark} />
              </p>
              <p className="text-red-400 text-3xl">
                <FontAwesomeIcon icon={faXmark} />
              </p>
              <p className="text-red-400 text-3xl">
                <FontAwesomeIcon icon={faXmark} />
              </p>
              <p className="text-red-400 text-3xl">
                <FontAwesomeIcon icon={faXmark} />
              </p>
              <p className="text-lg flex justify-end !bg-blue-600 text-white">
                £{carDetails.dayRate} Per Day
              </p>
              <br />
              <br />
            </div>

            {/* {Object.entries(toolTipObj.Bronze).map(([key, value]) => (
                <div
                  key={key}
                  className="tooltip-wrapper"
                  onMouseEnter={() => setTooltip(value)}
                  onMouseLeave={() => setTooltip("")}
                >
                  <p className="key w-full">{key}</p>
                  {tooltip === value && <p className="tooltip">{value}</p>}
                </div>
              ))} */}
            <div className="text-md leading-tight w-1/3 bg-silver justify-between flex flex-col rounded-lg shadow-2xl">
              <p className="font-bold bg-gray-100 p-5 !h-28 flex items-center">
                Silver <br /> (Weekly Rental (7+ days))
              </p>
              <p>Enhanced {toolTipIcon}</p>
              <p>Priority {toolTipIcon}</p>
              <p>200 Miles {toolTipIcon}</p>
              <p>Extended {toolTipIcon}</p>
              <p>Flexi Plus(+) {toolTipIcon}</p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="gap-2 text-green-400 text-3xl"
                />
                (within 150 miles)
              </p>
              <p className="text-green-400 text-3xl">
                <FontAwesomeIcon icon={faCheck} />
              </p>
              <p className="text-green-400 text-3xl">
                <FontAwesomeIcon icon={faCheck} />
              </p>
              <p className="text-red-400 text-3xl">
                <FontAwesomeIcon icon={faXmark} />
              </p>
              <p className="text-red-400 text-3xl">
                <FontAwesomeIcon icon={faXmark} />
              </p>
              <p className="text-lg !bg-blue-600 text-white">
                £{Math.round(carDetails.weekRateBreakDown())} Per Day
              </p>
              <br />
              <br />
            </div>
            <div className="text-md leading-tight w-1/3 bg-gold justify-between flex flex-col rounded-lg shadow-2xl">
              <p className="font-bold bg-gray-100 p-5 !h-28 flex items-center">
                Gold <br />
                (Monthly Rental (31+ days))
              </p>
              <p>Comprehensive</p>
              <p>Dedicated Agent</p>
              <p>400 Miles</p>
              <p>Full</p>
              <p>Flexi Pro(++)</p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="gap-2 text-green-400 text-3xl"
                />
                (within 400 miles)
              </p>
              <p className="text-green-400 text-3xl">
                <FontAwesomeIcon icon={faCheck} />
              </p>
              <p className="text-green-400 text-3xl">
                <FontAwesomeIcon icon={faCheck} />
              </p>
              <p className="text-green-400 text-3xl">
                <FontAwesomeIcon icon={faCheck} />
              </p>
              <p className="text-green-400 text-3xl">
                <FontAwesomeIcon icon={faCheck} />
              </p>
              <p className="text-lg !bg-blue-600 text-white">
                £{Math.round(carDetails.monthRateBreakDown())} Per Day
              </p>
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
      {/* {tooltip && (
        <div className="relative">
          <p className="tooltip">{tooltip}</p>
        </div>
      )} */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  pricing: state.price.pricing,
});

export default connect(mapStateToProps)(PricingRates);
