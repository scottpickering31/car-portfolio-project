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
    <div className="flex justify-center flex-col items-center h-full mb-20 bg-gray-400 pt-5">
      <h1 className="bg-customBlue mb-5 font-roboto text-center p-5 text-2xl text-white font-semibold tracking-widest rounded-2xl ">
        STEP 1 - SELECT YOUR SUPERCAR
      </h1>
      <div className="flex border border-gray-400 w-full shadow-2xl h-medium bg-gray-100">
        <div className="border-r-2 flex flex-col justify-center p-5 w-1/5 bg-customBlue">
          <div className="flex flex-col h-full justify-start font-whisper items-center text-6xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <img src="src/assets/Diamond.png" className="h-1/6 w-1/4" />
            <h1>Elite Drives</h1>
          </div>
          <div className="flex flex-col h-full">
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
          <div className="flex flex-col h-full justify-center items-center w-4/5">
            <div className="flex flex-row w-full">
              <ManufacturerDetails
                carMakes={carMakes}
                carManufacturer={carManufacturer}
                selectedManufacturer={selectedManufacturer}
                manufacturerDetails={manufacturerDetails}
              />
            </div>
            <div>
              <CarouselImages
                carMakes={carMakes}
                selectedManufacturer={selectedManufacturer}
                handleCarouselModelChange={handleCarouselModelChange}
              />
            </div>
          </div>
        )}
        {!selectedManufacturer && (
          <ManufacturerList setSelectedManufacturer={setSelectedManufacturer} />
        )}
        {selectedModel && (
          <div className="flex items-center w-4/5 ">
            <div className="flex flex-row h-full">
              <CarDetails
                selectedManufacturer={selectedManufacturer}
                selectedModel={selectedModel}
                carMakes={carMakes}
              />
              <div className="flex flex-col items-center justify-evenly w-1/2 ">
                <ImageDisplay
                  selectedManufacturer={selectedManufacturer}
                  selectedModel={selectedModel}
                  carMakes={carMakes}
                />
                <div className="flex flex-row  bg-white p-1 rounded-lg">
                  <p className="text-4xl font-genos font-bold underline underline-offset-8">
                    From £
                    {Math.round(
                      carMakes[selectedManufacturer].cars[
                        selectedModel
                      ].monthRateBreakDown(),
                    ).toLocaleString()}{" "}
                    per day
                  </p>

                  <p className="text-lg">*</p>
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
