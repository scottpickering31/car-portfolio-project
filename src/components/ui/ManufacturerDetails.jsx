import React from "react";

function ManufacturerDetails({
  manufacturerDetails,
  selectedManufacturer,
  carMakes,
}) {
  const logo = carMakes[selectedManufacturer].logo;
  const description = carMakes[selectedManufacturer].description;
  console.log(logo);

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <img src={logo} className="h-1/2" />
      <p>{description} </p>
    </div>
  );
}

export default ManufacturerDetails;
