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
    <div className="border mt-10 w-full bg-white shadow-2xl h-full mobile:p-0 mobilelg:p-0 tablet:p-0 laptop:p-5 desktop:p-5">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center mobile:flex-col mobile:gap-0 mobile:p-2 mobilelg:flex-col mobilelg:p-2 mobilelg:gap-0 tablet:flex-col tablet:p-0 tablet:gap-5 laptop:flex-row laptop:p-0 laptop:gap-5 desktop:flex-row desktop:gap-5 desktop:p-0">
          <img src={logo} className="w-28 mb-5" alt="Car Logo" />
          <h1 className="pb-5 underline underline-offset-4 font-bold font-genos mobile:text-2xl mobilelg:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-5xl">
            {selectedModel} - Cost Breakdown
          </h1>
        </div>
        <div className="w-full flex mobile:flex-col mobilelg:flex-col tablet:flex-col laptop:flex-row desktop:flex-row">
          <div className="flex bg-gray-200 border text-center p-3 gap-5 text-black justify-between mobile:flex-col mobile:border-0 mobile:h-full mobile:rounded-none mobilelg:flex-col mobilelg:border-0 mobilelg:h-full mobilelg:rounded-none tablet:flex-col tablet:border-0 tablet:h-full tablet:rounded-l-lg laptop:flex-row laptop:rounded-l-lg laptop:border-r-black laptop:h-large desktop:flex-row desktop:border-r-black desktop:rounded-l-lg">
            <div className="flex flex-row w-full mobile:gap-2 mobilelg:gap-2 tablet:gap-2 laptop:gap-5 desktop:gap-5">
              <div className="text-xl font-genos font-semibold leading-tight bg-gray-150 w-full justify-between flex flex-col shadow-2xl mobile:gap-2 mobile:rounded-none mobile:text-sm mobilelg:gap-2 mobilelg:rounded-none mobilelg:text-sm tablet:gap-2 tablet:rounded-lg tablet:text-base laptop:rounded-lg laptop:text-lg desktop:text-lg desktop:rounded-lg">
                <p className=" bg-gray-100 text-xl p-5 !h-28 flex items-center justify-center shadow-2xl font-bold">
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
                className="text-xl font-genos font-semibold leading-tight bg-bronze w-full justify-between flex flex-col rounded-lg shadow-2xl mobile:gap-2 mobile:text-sm mobilelg:gap-2 mobilelg:text-sm tablet:gap-2 tablet:text-base laptop:text-lg desktop:text-lg"
              >
                <p className="font-bold !bg-customBlue p-5 !h-28 flex items-center text-xl text-white shadow-2xl">
                  Bronze <br /> (Day Rental)
                </p>
                {Object.entries(toolTipObj.Bronze).map(([key, value]) => (
                  <div
                    key={key}
                    className="tooltip-wrapper"
                    onMouseEnter={() => setTooltip(value)}
                    onMouseLeave={() => setTooltip("")}
                  >
                    <p className="key w-full gap-2">
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
                <p className="font-semibold !bg-customOrange-lighter text-white text-xl">
                  £{carDetails.dayRate.toLocaleString()} Per Day
                </p>
                <br />
                <br />
              </div>
            </div>
            <div className="flex flex-row w-full mobile:gap-2 mobilelg:gap-2 tablet:gap-2 laptop:gap-5 desktop:gap-5">
              <div className="text-xl font-genos font-semibold leading-tight bg-silver w-full justify-between flex flex-col rounded-lg shadow-2xl mobile:gap-2 mobile:text-sm mobilelg:gap-2 mobilelg:text-sm tablet:gap-2 tablet:text-base laptop:text-lg desktop:text-lg">
                <p className="font-bold !bg-customBlue p-5 !h-28 flex text-xl items-center text-white shadow-2xl">
                  Silver <br /> (Weekly Rental (7+ days))
                </p>
                {Object.entries(toolTipObj.Silver).map(([key, value]) => (
                  <div
                    key={key}
                    className="tooltip-wrapper"
                    onMouseEnter={() => setTooltip(value)}
                    onMouseLeave={() => setTooltip("")}
                  >
                    <p className="key w-full gap-2">
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
                <p className="font-semibold !bg-customOrange-lighter text-white text-xl">
                  £{Math.round(carDetails.weekRateBreakDown()).toLocaleString()}{" "}
                  Per Day
                </p>
                <br />
                <br />
              </div>
              <div className="text-xl font-genos font-semibold leading-tight bg-gold w-full justify-between flex flex-col rounded-lg shadow-2xl mobile:gap-2 mobile:text-sm mobilelg:gap-2 mobilelg:text-sm tablet:gap-2 tablet:text-base laptop:text-xl desktop:text-lg">
                <p className="font-bold !bg-customBlue p-5 text-xl !h-28 flex items-center text-white shadow-2xl">
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
                    <p className="key w-full gap-2">
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
                <p className="font-semibold !bg-customOrange-lighter text-white text-xl">
                  £
                  {Math.round(carDetails.monthRateBreakDown()).toLocaleString()}{" "}
                  Per Day
                </p>
                <br />
                <br />
              </div>
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
