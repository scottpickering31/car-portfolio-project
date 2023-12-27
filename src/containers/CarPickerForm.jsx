import React, { useState } from "react";
import carMakes from "../Data";
import ManufacturerSelect from "../components/ui/Manufacturers/ManufacturerSelect";
import ModelSelect from "../components/ui/ModelSelect";
import CarDetails from "../components/ui/CarDetails";
import ImageDisplay from "../components/ui/ImageDisplay";
import ManufacturerDetails from "../components/ui/Manufacturers/ManufacturerDetails";
import PricingStructure from "../components/ui/Pricing/PricingStructure";
import PriceButton from "../components/ui/Buttons/PriceButton";

function CarPickerForm() {
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [manufacturerDetails, setManufacturerDetails] = useState("");
  const carManufacturer = Object.keys(carMakes).sort();
  const [pricing, setPricing] = useState(false);

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
    <div className="flex justify-center flex-col items-center mt-40 h-2/3 mb-40 bg-white">
      <h1 className="mb-8 text-3xl font-bold">Car Selection</h1>
      <div className="flex border border-gray-400 w-11/12 rounded-lg shadow-2xl">
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
          <div>
            <div className="flex flex-row">
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
        )}
      </div>
      {selectedModel && (
        <div>
          <PricingStructure
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
