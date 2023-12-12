// ImageDisplay.js
import React from "react";

function ImageDisplay({ selectedManufacturer, selectedModel, carMakes }) {
  const carDetails = carMakes[selectedManufacturer].cars[selectedModel];

  if (!carDetails) return null;

  return (
    <div className="w-2/3 flex justify-center items-center">
      <img
        className=""
        src={carDetails.image}
        alt={`${selectedManufacturer} ${selectedModel}`}
      />
    </div>
  );
}

export default ImageDisplay;
