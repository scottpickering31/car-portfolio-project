import React from "react";

function ManufacturerDetails({ selectedManufacturer, carMakes }) {
  const logo = carMakes[selectedManufacturer].logo;
  const description = carMakes[selectedManufacturer].description;

  return (
    <div className="w-full h-1/2 flex justify-center items-center font-genos flex-row bg-gray-200 mobile:flex-col mobile:p-0 mobile:h-full mobilelg:flex-col mobilelg:p-0 mobilelg:h-full tablet:flex-row tablet:p-2 tablet:h-1/2 laptop:flex-row laptop:p-2 laptop:h-1/2 desktop:flex-row desktop:h-1/2 desktop:p-5">
      <img
        src={logo}
        className="h-full p-10 mobile:w-2/3 mobilelg:w-2/3 tablet:w-1/3 laptop:w-1/3 desktop:w-1/3"
      />
      <div className="flex flex-col items-center h-full font-genos mobile:w-full mobilelg:w-full tablet:w-2/3 laptop:w-2/3 desktop:w-2/3">
        <h1 className="underline flex justify-center items-center text-white bg-customBlue p-5 border w-1/2 shadow-2xl mobile:text-5xl mobile:w-full mobile-lg:text-5xl mobilelg:w-full tablet:text-3xl tablet:w-1/2 laptop:text-5xl laptop:w-1/2 desktop:text-5xl desktop:w-1/2 ">
          {selectedManufacturer}
        </h1>
        <p className="text-center mobile:p-3 mobile:text-2xl mobilelg:p-3 mobilelg:text-2xl tablet:p-5 tablet:text-lg laptop:p-5 laptop:text-lg desktop:p-5 desktop:text-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ManufacturerDetails;
