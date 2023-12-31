import React from "react";

function ManufacturerDetails({ selectedManufacturer, carMakes }) {
  const logo = carMakes[selectedManufacturer].logo;
  const description = carMakes[selectedManufacturer].description;

  return (
    <div className="w-full flex justify-center items-center font-genos flex-row bg-gray-200 p-5">
      <img src={logo} className="h-48" />
      <div className="flex flex-col items-center font-genos">
        <h1 className="text-5xl underline flex justify-center items-center text-white bg-customBlue p-5 border w-1/2 shadow-2xl">
          {selectedManufacturer}
        </h1>
        <p className="text-center p-5 text-2xl">{description}</p>
      </div>
    </div>
  );
}

export default ManufacturerDetails;
