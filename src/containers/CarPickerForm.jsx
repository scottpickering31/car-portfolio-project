import React, { useState } from "react";
import carMakes from "../Data";
import ManufacturerSelect from "../components/ui/Manufacturers/ManufacturerSelect";
import ModelSelect from "../components/ui/ModelSelect";
import CarDetails from "../components/ui/CarDetails";
import ImageDisplay from "../components/ui/ImageDisplay";
import ManufacturerDetails from "../components/ui/Manufacturers/ManufacturerDetails";
import PriceButton from "../components/ui/Buttons/PriceButton";
import PricingStructure from "../components/ui/Pricing/PricingStructure";

function CarPickerForm() {
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [manufacturerDetails, setManufacturerDetails] = useState("");
  const [pricing, setPricing] = useState(false);
  const carManufacturer = Object.keys(carMakes).sort();

  const handlePricing = () => {
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
    <div className="flex justify-center flex-col items-center mt-40 h-2/3 mb-40">
      <h1 className="mb-8 text-3xl font-bold">Car Selection</h1>
      <div className="flex border border-gray-400 w-11/12">
        <div className="border-r-2 flex flex-col justify-center p-5 w-2/6">
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
        {selectedManufacturer && !selectedModel && (
          <>
            <ManufacturerDetails
              carMakes={carMakes}
              carManufacturer={carManufacturer}
              selectedManufacturer={selectedManufacturer}
              manufacturerDetails={manufacturerDetails}
            />
          </>
        )}
        {!selectedManufacturer && (
          <div className="flex flex-col justify-center text-center w-3/4">
            <h1>Elite Drives</h1>
            <img
              src="src/assets/Elite-Drives-Car-Fleet.png"
              className="h-5/6 p-6 w-full"
            />
          </div>
        )}
        {selectedModel && (
          <>
            <div>
              <CarDetails
                selectedManufacturer={selectedManufacturer}
                selectedModel={selectedModel}
                carMakes={carMakes}
              />
              <ImageDisplay
                selectedManufacturer={selectedManufacturer}
                selectedModel={selectedModel}
                carMakes={carMakes}
              />
            </div>
            <div>
              <PriceButton handlePricing={handlePricing} />
            </div>
          </>
        )}
      </div>
      {selectedModel && (
        <div>
          <PricingStructure
            selectedModel={selectedModel}
            pricing={pricing}
            selectedManufacturer={selectedManufacturer}
            carMakes={carMakes}
          />
        </div>
      )}
    </div>
  );
}

export default CarPickerForm;
