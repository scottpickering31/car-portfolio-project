import React from "react";
import carMakes from "../../../Data";

function ManufacturerList({ setSelectedManufacturer }) {
  const manufacturerLogos = Object.entries(carMakes);

  const chooseManufacturerLogo = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
  };

  return (
    <div className="flex flex-col justify-around items-center w-full">
      <h1 className="font-whisper text-6xl">Elite Drives</h1>
      <div className="grid grid-cols-6 gap-4 p-5">
        {manufacturerLogos.map(([manufacturer, details], key) => {
          return (
            <div
              className="shadow-md rounded-lg cursor-pointer hover:scale-110 transition duration-100  "
              key={key}
            >
              <img
                src={details.logo}
                value={manufacturer}
                alt={key + 1}
                className="border mr-5 p-2 h-full w-full rounded-lg "
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
