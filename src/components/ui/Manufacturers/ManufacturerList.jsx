import React from "react";
import carMakes from "../../../Data";

function ManufacturerList({ setSelectedManufacturer }) {
  const manufacturerLogos = Object.entries(carMakes);

  const chooseManufacturerLogo = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
  };

  return (
    <div className="flex flex-col justify-evenly items-center mobile:mt-5 mobilelg:mt-5 tablet:mt-5 laptop:mt-0 desktop:mt-0 mobile:w-full mobilelg:w-full tablet:w-full laptop:w-full desktop:w-full">
      <h1 className="bg-customBlue shadow-2xl font-roboto text-center text-white font-semibold tracking-widest rounded-2xl mobile:text-base mobile:w-11/12 mobile:mb-0 mobile:p-2 tablet:text-2xl laptop:text-2xl desktop:text-4xl desktop:w-1/2 desktop:p-5 desktop:mb-5">
        STEP 1: SELECT YOUR SUPERCAR
      </h1>
      <div className="grid gap-4 p-3 mobile:grid-cols-3 mobilelg:grid-cols-3 tablet:grid-cols-6 laptop:grid-cols-6 desktop:grid-cols-6">
        {manufacturerLogos.map(([manufacturer, details], key) => {
          return (
            <div
              className="shadow-md rounded-lg cursor-pointer hover:scale-110 transition duration-100 mobile:h-18 mobile:w-18 mobilelg:max-h-28 mobilelg:max-w-28 tablet:h-18 tablet:w-18 laptop:h-32 laptop:w-32 desktop:max-h-72 desktop:max-w-72"
              key={key}
            >
              <img
                src={details.logo}
                value={manufacturer}
                alt={key + 1}
                className="border p-2 h-full w-full rounded-lg"
                onClick={(e) =>
                  chooseManufacturerLogo(e.target.getAttribute("value"))
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ManufacturerList;
