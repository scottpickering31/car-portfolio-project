// ImageDisplay.js
import React from "react";

function ImageDisplay({ selectedManufacturer, selectedModel, carMakes }) {
  const carDetails = carMakes[selectedManufacturer].cars[selectedModel];

  if (!carDetails) return null;

  return (
    <div className="flex justify-center items-center transition duration-300 transform hover:scale-105">
      <img
        className="w-full"
        src={carDetails.image}
        alt={`${selectedManufacturer} ${selectedModel}`}
      />
    </div>
  );
}

export default ImageDisplay;
