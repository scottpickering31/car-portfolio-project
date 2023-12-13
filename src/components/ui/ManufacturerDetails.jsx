import React from "react";

function ManufacturerDetails({ selectedManufacturer, carMakes }) {
  const logo = carMakes[selectedManufacturer].logo;
  const description = carMakes[selectedManufacturer].description;

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <img src={logo} className="h-96 w-96" />
      <p className="text-center">{description}</p>
    </div>
  );
}

export default ManufacturerDetails;
