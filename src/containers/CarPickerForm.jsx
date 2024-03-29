import React, { useState } from "react";
import carMakes from "../Data";
import ManufacturerSelect from "../components/ui/Manufacturers/ManufacturerSelect";
import ModelSelect from "../components/ui/ModelSelect";
import CarDetails from "../components/ui/CarDetails";
import ImageDisplay from "../components/ui/ImageDisplay";
import ManufacturerDetails from "../components/ui/Manufacturers/ManufacturerDetails";
import PricingRates from "../components/ui/Pricing/PricingRates";
import PriceButton from "../components/ui/Buttons/PriceButton";
import ManufacturerList from "../components/ui/Manufacturers/ManufacturerList";
import CarouselImages from "../components/ui/AvailableModels";
import { useDispatch } from "react-redux";
import { scrollToPricing } from "../../src/statemanagement/actions/pricingAction";

function CarPickerForm() {
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [manufacturerDetails, setManufacturerDetails] = useState("");
  const carManufacturer = Object.keys(carMakes).sort();
  const [pricing, setPricing] = useState(false);
  const dispatch = useDispatch();

  function handleCarouselModelChange(modelName) {
    setSelectedModel(modelName);
  }

  const handlePricing = () => {
    dispatch(scrollToPricing());
    setPricing(!pricing);
  };

  const handleManufacturerChange = (event) => {
    setSelectedManufacturer(event.target.value);
    setSelectedModel("");
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
    setManufacturerDetails("");
  };

  return (
    <div
      id="carPickerFormSection"
      className="flex justify-center flex-col w-full items-center h-full mb-20 pt-5"
    >
      <div className="flex border items-center border-gray-400 w-full shadow-2xl h-medium bg-gray-100 mobile:h-full mobilelg:h-full tablet:h-full laptop:h-medium desktop:h-medium mobile:flex-col mobilelg:flex-col tablet:flex-col laptop:flex-row desktop:flex-row">
        <div className="border-r-2 flex flex-col h-full justify-center w-1/5 bg-customBlue mobile:w-full mobile:p-2 mobilelg:w-full mobilelg:p-2 tablet:w-full tablet:p-5 laptop:w-1/5 laptop:p-5 desktop:w-1/5 desktop:p-5">
          <div className="flex flex-col h-1/3 justify-start font-whisper items-center font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mobile:text-3xl mobilelg:text-4xl mobile:mb-5 mobilelg:mb-5 tablet:mb-5 tablet:text-5xl laptop:mb-0 laptop:text-3xl desktop:text-4xl desktop:mb-0">
            <img
              src="images/Diamond.png"
              className="mobile:h-1/6 mobile:w-1/6 mobilelg:h-1/6 mobilelg:w-1/12 tablet:h-1/6 tablet:w-1/12 laptop:w-1/3 desktop:w-1/4"
            />
            <h1>Elite Drives</h1>
          </div>
          <div className="flex h-2/3 gap-5 mobile:flex-row mobilelg:flex-row tablet:flex-row mobile:justify-center mobilelg:justify-center tablet:justify-center laptop:justify-normal desktop:justify-normal laptop:flex-col desktop:flex-col">
            <ManufacturerSelect
              carManufacturer={carManufacturer}
              selectedManufacturer={selectedManufacturer}
              handleManufacturerChange={handleManufacturerChange}
            />
            {selectedManufacturer && (
              <>
                <ModelSelect
                  selectedManufacturer={selectedManufacturer}
                  selectedModel={selectedModel}
                  handleModelChange={handleModelChange}
                  carMakes={carMakes}
                />
              </>
            )}
          </div>
        </div>
        {selectedManufacturer && !selectedModel && (
          <div className="flex flex-col justify-center items-center mobile:h-full mobile:w-full mobilelg:h-full mobilelg:w-full tablet:h-medium tablet:w-full laptop:h-medium laptop:w-4/5 desktop:h-medium desktop:w-4/5">
            <ManufacturerDetails
              carMakes={carMakes}
              carManufacturer={carManufacturer}
              selectedManufacturer={selectedManufacturer}
              manufacturerDetails={manufacturerDetails}
            />
            <CarouselImages
              carMakes={carMakes}
              selectedManufacturer={selectedManufacturer}
              handleCarouselModelChange={handleCarouselModelChange}
            />
          </div>
        )}
        {!selectedManufacturer && (
          <ManufacturerList setSelectedManufacturer={setSelectedManufacturer} />
        )}
        {selectedModel && (
          <div className="flex items-center mobile:flex-col mobile:w-full mobilelg:flex-col mobilelg:w-full tablet:flex-none tablet:w-full laptop:flex-none laptop:w-4/5 desktop:flex-none desktop:w-4/5">
            <div className="flex h-full mobile:flex-col mobile:items-center mobilelg:flex-col mobilelg:items-center tablet:flex-row laptop:flex-row desktop:flex-row">
              <CarDetails
                selectedManufacturer={selectedManufacturer}
                selectedModel={selectedModel}
                carMakes={carMakes}
              />
              <div className="flex flex-col items-center justify-evenly mobile:w-full mobilelg:w-full tablet:w-1/2 laptop:w-1/2 desktop:w-1/2">
                <ImageDisplay
                  selectedManufacturer={selectedManufacturer}
                  selectedModel={selectedModel}
                  carMakes={carMakes}
                />
                <div className="flex bg-white p-1 rounded-lg mobile:flex-col mobilelg:flex-row tablet:flex-row laptop:flex-row desktop:flex-row">
                  <p className="text-4xl font-genos font-bold underline underline-offset-8 text-center">
                    From £
                    {Math.round(
                      carMakes[selectedManufacturer].cars[
                        selectedModel
                      ].monthRateBreakDown()
                    ).toLocaleString()}{" "}
                    per day
                  </p>
                </div>
                <div className="flex justify-center items-center flex-col mb-5 gap-2 p-5">
                  <p>
                    <strong>Interested?</strong> Check out our
                  </p>
                  <PriceButton handlePricing={handlePricing} />
                  <p>
                    for the <strong>{selectedModel}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {selectedModel && (
        <div className="w-full">
          <PricingRates
            selectedModel={selectedModel}
            selectedManufacturer={selectedManufacturer}
            carMakes={carMakes}
          />
        </div>
      )}
    </div>
  );
}

export default CarPickerForm;
