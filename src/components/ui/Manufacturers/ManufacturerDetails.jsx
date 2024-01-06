import React from "react";

function ManufacturerDetails({ selectedManufacturer, carMakes }) {
  const logo = carMakes[selectedManufacturer].logo;
  const description = carMakes[selectedManufacturer].description;

  return (
    <div className="w-1/2 flex justify-center items-center flex-col">
      <h1 className="text-3xl underline">{selectedManufacturer}</h1>
      <img src={logo} className="h-60" />
      <p className="text-center p-5 text-xl">{description}</p>
    </div>
  );
}

export default ManufacturerDetails;
