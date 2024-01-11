import React from "react";
import carMakes from "../../../Data";

function ManufacturerList({ setSelectedManufacturer }) {
  const manufacturerLogos = Object.entries(carMakes);

  const chooseManufacturerLogo = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
  };

  return (
    <div className="flex flex-col justify-evenly items-center w-4/5">
      <h1 className="bg-customBlue shadow-2xl font-roboto text-center text-white font-semibold tracking-widest rounded-2xl mobile:text-sm mobile:w-11/12 mobile:mb-0 mobile:p-2 desktop:text-2xl desktop:w-1/2 desktop:p-5 desktop:mb-5">
        STEP 1: SELECT YOUR SUPERCAR
      </h1>
      <div className="grid grid-cols-6 gap-4 p-5 mobile:grid-cols-3 laptop:grid-cols-6 desktop:grid-cols-6">
        {manufacturerLogos.map(([manufacturer, details], key) => {
          return (
            <div
              className="shadow-md rounded-lg cursor-pointer hover:scale-110 transition duration-100 mobile:h-18 mobile:w-18 mobilelg:h-24 mobilelg:w-26 tablet:h-24 tablet:w-32 laptop:h-32 laptop:w-32 desktop:w-36 desktop:h-36"
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
