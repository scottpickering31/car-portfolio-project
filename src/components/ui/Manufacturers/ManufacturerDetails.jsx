import React from "react";

function ManufacturerDetails({ selectedManufacturer, carMakes }) {
  const logo = carMakes[selectedManufacturer].logo;
  const description = carMakes[selectedManufacturer].description;

  return (
    <div className="w-full h-1/2 flex justify-center items-center font-genos flex-row bg-gray-200 p-5 mobile:flex-col mobile:h-full mobilelg:flex-col mobilelg:h-full tablet:flex-row tablet:h-1/2 laptop:flex-row laptop:h-1/2 desktop:flex-row desktop:h-1/2">
      <img src={logo} className="h-full w-1/3 p-10" />
      <div className="flex flex-col items-center font-genos w-2/3">
        <h1 className="underline flex justify-center items-center text-white bg-customBlue p-5 border w-1/2 shadow-2xl mobile:text-sm mobile-lg:text-sm tablet:text-3xl laptop:text-5xl desktop:text-5xl ">
          {selectedManufacturer}
        </h1>
        <p className="text-center p-5 text-2xl">{description}</p>
      </div>
    </div>
  );
}

export default ManufacturerDetails;
