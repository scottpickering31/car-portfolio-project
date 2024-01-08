import { connect } from "react-redux";
import CalendarDisplay from "./PricingCalender";
import "./PricingRates.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { toolTipObj } from "./PricingToolTipData";
import { useState, useEffect, useRef } from "react";

function PricingRates({
  selectedModel,
  carMakes,
  selectedManufacturer,
  pricing,
  scrollToPricing,
}) {
  const pricingRef = useRef(null);
  const [tooltip, setTooltip] = useState("");
  const carDetails = carMakes[selectedManufacturer].cars[selectedModel];
  const logo = carMakes[selectedManufacturer].logo;

  useEffect(() => {
    if (scrollToPricing) {
      pricingRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [scrollToPricing]);

  if (!pricing) {
    return null;
  }

  return (
    <div className="border mt-10 w-full p-5 bg-white shadow-2xl h-full">
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-row items-center gap-5">
          <img src={logo} className="w-28 mb-5" alt="Car Logo" />
          <h1 className="pb-5 text-6xl underline underline-offset-4 font-bold font-genos">
            {selectedModel} - Cost Breakdown
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="flex h-large bg-gray-200 border border-r-black rounded-l-lg text-center p-3 gap-5 text-black flex-row justify-between">
            <div className="text-xl font-genos leading-tight bg-gray-150 w-1/4 justify-between flex flex-col rounded-lg shadow-2xl">
              <p className=" bg-gray-100 p-5 !h-28 flex items-center justify-center shadow-2xl">
                Tariff Details
              </p>
              <p>Insurance Package</p>
              <p>Customer Support</p>
              <p>Mileage Allowance</p>
              <p>Roadside Assist</p>
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
            <div
              ref={pricingRef}
              className="text-xl font-genos leading-tight w-1/4 bg-bronze justify-between flex flex-col rounded-lg shadow-2xl "
            >
              <p className="font-bold !bg-customBlue p-5 !h-28 flex items-center text-white shadow-2xl">
                Bronze <br /> (Day Rental)
              </p>
              {Object.entries(toolTipObj.Bronze).map(([key, value]) => (
                <div
                  key={key}
                  className="tooltip-wrapper"
                  onMouseEnter={() => setTooltip(value)}
                  onMouseLeave={() => setTooltip("")}
                >
                  <p className="key w-full gap-3">
                    {key}
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="text-sm"
                    />
                  </p>
                  {tooltip === value && <p className="tooltip">{value}</p>}
                </div>
              ))}
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
              <p className="text-xl font-bold flex justify-end !bg-customOrange-lighter text-white">
                £{carDetails.dayRate.toLocaleString()} Per Day
              </p>
              <br />
              <br />
            </div>
            <div className="text-xl font-genos leading-tight w-1/4 bg-silver justify-between flex flex-col rounded-lg shadow-2xl">
              <p className="font-bold !bg-customBlue p-5 !h-28 flex items-center text-white shadow-2xl">
                Silver <br /> (Weekly Rental (7+ days))
              </p>
              {Object.entries(toolTipObj.Silver).map(([key, value]) => (
                <div
                  key={key}
                  className="tooltip-wrapper"
                  onMouseEnter={() => setTooltip(value)}
                  onMouseLeave={() => setTooltip("")}
                >
                  <p className="key w-full gap-3">
                    {key}{" "}
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="text-sm"
                    />
                  </p>
                  {tooltip === value && <p className="tooltip">{value}</p>}
                </div>
              ))}
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
              <p className="text-xl font-bold !bg-customOrange-lighter text-white">
                £{Math.round(carDetails.weekRateBreakDown()).toLocaleString()}{" "}
                Per Day
              </p>
              <br />
              <br />
            </div>
            <div className="text-xl font-genos leading-tight w-1/4 bg-gold justify-between flex flex-col rounded-lg shadow-2xl">
              <p className="font-bold !bg-customBlue p-5 !h-28 flex items-center text-white shadow-2xl">
                Gold <br />
                (Monthly Rental (31+ days))
              </p>
              {Object.entries(toolTipObj.Gold).map(([key, value]) => (
                <div
                  key={key}
                  className="tooltip-wrapper"
                  onMouseEnter={() => setTooltip(value)}
                  onMouseLeave={() => setTooltip("")}
                >
                  <p className="key w-full gap-3">
                    {key}{" "}
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="text-sm"
                    />
                  </p>
                  {tooltip === value && <p className="tooltip">{value}</p>}
                </div>
              ))}
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
              <p className="text-xl font-bold !bg-customOrange-lighter text-white">
                £{Math.round(carDetails.monthRateBreakDown()).toLocaleString()}{" "}
                Per Day
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  pricing: state.price.pricing,
  scrollToPricing: state.price.scrollToPricing,
});

export default connect(mapStateToProps)(PricingRates);
