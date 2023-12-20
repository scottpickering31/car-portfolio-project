// CarDetails.js
import React, { useState } from "react";
import PriceButton from "./Buttons/PriceButton";

function CarDetails({ selectedManufacturer, selectedModel, carMakes }) {
  const [pricing, setPricing] = useState(false);
  const carDetails = carMakes[selectedManufacturer].cars[selectedModel];

  const handlePricing = () => {
    setPricing(!pricing);
  };

  if (!carDetails) return null;

  const descriptionStyles = "flex justify-between p-1 border-b-2";
  const rightText = "text-right";

  return (
    <div className="ml-8 w-2/3 flex items-center flex-col p-4 ">
      <div className="border-b-2 p-4 rounded-md flex items-center flex-col text-center">
        <h2 className="text-xl font-bold mb-2">{selectedModel}</h2>
        <p>{carDetails.description}</p>
      </div>
      <div className="flex flex-col w-full mt-3">
        <div className={descriptionStyles}>
          <p>Weight:</p>
          <p className={rightText}>{carDetails.weight}</p>
        </div>
        <div className={descriptionStyles}>
          <p>Torque:</p>
          <p className={rightText}>{carDetails.torque}</p>
        </div>
        <div className={descriptionStyles}>
          <p>Horsepower:</p>
          <p className={rightText}>{carDetails.horsepower}</p>
        </div>
        <div className={descriptionStyles}>
          <p>Engine:</p>
          <p className={rightText}>{carDetails.engine}</p>
        </div>
        <div className={descriptionStyles}>
          <p>0 to 60 mph:</p>
          <p className={rightText}>{carDetails.speed} seconds</p>
        </div>
      </div>{" "}
      <div>
        <PriceButton handlePricing={handlePricing} />
      </div>
    </div>
  );
}

export default CarDetails;
