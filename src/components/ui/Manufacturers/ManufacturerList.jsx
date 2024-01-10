import React from "react";
import carMakes from "../../../Data";

function ManufacturerList({ setSelectedManufacturer }) {
  const manufacturerLogos = Object.entries(carMakes);

  const chooseManufacturerLogo = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
  };

  return (
    <div className="flex flex-col justify-evenly items-center w-4/5">
      <div className="flex flex-col font-whisper items-center text-9xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <img src="src/assets/Diamond.png" className="h-1/3 w-1/6" />
        <h1>Elite Drives</h1>
      </div>
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
