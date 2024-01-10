import React from "react";
import carMakes from "../../../Data";

function ManufacturerList({ setSelectedManufacturer }) {
  const manufacturerLogos = Object.entries(carMakes);

  const chooseManufacturerLogo = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
  };

  return (
    <div className="flex flex-col justify-evenly items-center w-4/5">
      <h1 className="bg-customBlue mb-5 font-roboto text-center p-5 text-2xl text-white font-semibold tracking-widest w-1/2 rounded-2xl ">
        STEP 1 - SELECT YOUR SUPERCAR
      </h1>
      <div className="grid grid-cols-6 gap-4">
        {manufacturerLogos.map(([manufacturer, details], key) => {
          return (
            <div
              className="shadow-md rounded-lg cursor-pointer hover:scale-110 transition duration-100 w-36 h-36"
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
