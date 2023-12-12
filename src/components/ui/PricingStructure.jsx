import { useState } from "react";

function PricingStructure({ selectedManufacturer, selectedModel, carMakes }) {
  const carDetails = carMakes[selectedManufacturer].cars[selectedModel];
  return (
    <div>
      <h1>{carDetails.description}</h1>
    </div>
  );
}

export default PricingStructure;
