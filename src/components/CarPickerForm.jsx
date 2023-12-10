import React, { useState } from "react";
import carMakes from "../Data";
import ManufacturerSelect from "./ui/ManufacturerSelect";
import ModelSelect from "../components/ui/ModelSelect";
import CarDetails from "../components/ui/CarDetails";
import ImageDisplay from "../components/ui/ImageDisplay";
import ManufacturerDetails from "./ui/ManufacturerDetails";

function CarPickerForm() {
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const carManufacturer = Object.keys(carMakes).sort();

  const handleManufacturerChange = (event) => {
    setSelectedManufacturer(event.target.value);
    setSelectedModel("");
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  return (
    <div className="flex justify-center flex-col items-center mt-40 h-2/3 mb-96">
      <h1 className="mb-8 text-3xl font-bold">Car Selection</h1>
      <div className="flex border border-gray-400 w-11/12">
        <div className="border-r-2 flex flex-col justify-center p-5 h-96 w-2/6">
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
              <ManufacturerDetails
                logo={logo}
                ManufacturerDescription={ManufacturerDescription}
              />
            </>
          )}
        </div>
        {selectedModel && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default CarPickerForm;
