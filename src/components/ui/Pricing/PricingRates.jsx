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
          <img
            src={logo}
            className="w-28 mb-5 mobile:w-28 mobilelg:w-28 tablet:w-28 laptop:w-14 desktop:w-14"
            alt="Car Logo"
          />
          <h1 className="pb-5 underline underline-offset-4 font-bold font-genos mobile:text-2xl mobilelg:text-3xl tablet:text-4xl laptop:text-xl desktop:text-xl">
            {selectedModel} - Cost Breakdown
          </h1>
        </div>
        <div className="w-full flex mobile:flex-col mobilelg:flex-col tablet:flex-col laptop:flex-row desktop:flex-row">
          <div className="flex bg-gray-200 border text-center p-3 text-black justify-between flex-row mobile:overflow-scroll mobile:gap-2 mobile:border-0 mobile:h-full mobile:rounded-none mobilelg:overflow-auto mobilelg:gap-2 mobilelg:border-0 mobilelg:h-full mobilelg:rounded-none tablet:overflow-auto tablet:gap-2 tablet:border-0 tablet:h-full tablet:rounded-l-lg laptop:flex-row laptop:gap-5 laptop:overflow-hidden laptop:rounded-l-lg laptop:border-r-black laptop:h-large desktop:h-extral desktop:overflow-hidden desktop:gap-5 desktop:flex-row desktop:border-r-black desktop:rounded-l-lg">
            <div className="font-genos font-semibold leading-tight bg-gray-150 w-full justify-between flex flex-col shadow-2xl mobile:gap-2 mobile:rounded-none mobile:text-xs mobilelg:gap-2 mobilelg:rounded-none mobilelg:text-xs tablet:gap-2 tablet:rounded-lg tablet:text-base laptop:rounded-lg laptop:text-sm desktop:text-lg desktop:rounded-lg">
              <p className=" bg-gray-100 p-5 !h-28 flex items-center justify-center shadow-2xl font-bold mobile:text-sm mobile:p-5 mobilelg:text-sm mobilelg:p-5 tablet:text-xl tablet:p-5 laptop:text-base laptop:p-1 desktop:text-lg desktop:p-5">
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
              className="text-xl font-genos font-semibold leading-tight bg-bronze w-full justify-between flex flex-col rounded-lg shadow-2xl mobile:gap-2 mobile:text-xs mobilelg:gap-2 mobilelg:text-xs tablet:gap-2 tablet:text-base laptop:text-sm desktop:text-lg"
            >
              <p className="font-bold !bg-customBlue p-5 !h-28 flex items-center text-white shadow-2xl mobile:text-sm mobile:p-5 mobilelg:text-sm mobilelg:p-5 tablet:text-xl tablet:p-5 laptop:text-base laptop:p-1 desktop:text-lg desktop:p-5">
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
              <p className="font-semibold !bg-customOrange-lighter text-white underline underline-offset-4 mobile:text-sm mobilelg:text-sm tablet:text-xl laptop:text-xl desktop:text-xl">
                £{carDetails.dayRate.toLocaleString()} Per Day
              </p>
              <br />
              <br />
            </div>
            <div className="text-xl font-genos font-semibold leading-tight bg-silver w-full justify-between flex flex-col rounded-lg shadow-2xl mobile:gap-2 mobile:text-xs mobilelg:gap-2 mobilelg:text-xs tablet:gap-2 tablet:text-base laptop:text-sm desktop:text-lg">
              <p className="font-bold !bg-customBlue p-5 !h-28 flex items-center text-white shadow-2xl mobile:text-sm mobile:p-5 mobilelg:text-sm mobilelg:p-5 tablet:text-xl tablet:p-5 laptop:text-base laptop:p-1 desktop:text-lg desktop:p-5">
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
              <p className="font-semibold !bg-customOrange-lighter text-white underline underline-offset-4 mobile:text-sm mobilelg:text-sm tablet:text-xl laptop:text-xl desktop:text-xl">
                £{Math.round(carDetails.weekRateBreakDown()).toLocaleString()}{" "}
                Per Day
              </p>
              <br />
              <br />
            </div>
            <div className="text-xl font-genos font-semibold leading-tight bg-gold w-full justify-between flex flex-col rounded-lg shadow-2xl mobile:gap-2 mobile:text-xs mobilelg:gap-2 mobilelg:text-xs tablet:gap-2 tablet:text-base laptop:text-sm desktop:text-lg">
              <p className="font-bold !bg-customBlue !h-28 flex items-center text-white shadow-2xl mobile:text-sm mobile:p-5 mobilelg:text-sm mobilelg:p-5 tablet:text-xl tablet:p-5 laptop:text-base laptop:p-1 desktop:text-lg desktop:p-5">
                Gold <br />
                (Monthly Rental (31+ days))
              </p>
              {Object.entries(toolTipObj.Gold).map(([key, value]) => (
                <div
                  key={key}
                  className="tooltip-wrapper "
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
              <p className="font-semibold !bg-customOrange-lighter text-white underline underline-offset-4 mobile:text-sm mobilelg:text-sm tablet:text-xl laptop:text-xl desktop:text-xl">
                £{Math.round(carDetails.monthRateBreakDown()).toLocaleString()}{" "}
                Per Day
              </p>
              <br />
              <br />
            </div>
          </div>
          <div className="mobile:w-full mobilelg:w-full tablet:w-full laptop:w-1/2 desktop:w-1/2">
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
