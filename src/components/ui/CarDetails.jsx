// CarDetails.js
import React from "react";

function CarDetails({ selectedManufacturer, selectedModel, carMakes }) {
  const carDetails = carMakes[selectedManufacturer].cars[selectedModel];

  if (!carDetails) return null;

  const descriptionStylesOne = "flex justify-between p-1 border-b-2";
  const descriptionStylesTwo =
    "flex justify-between p-1 border-b-2 bg-gray-200";
  const boldFont = "font-bold";
  const rightText = "text-right";

  return (
    <div className="ml-8 w-2/3 flex items-center flex-col p-4 justify-around">
      <div className="font-genos text-xl border-b-2 rounded-md flex items-center flex-col text-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src={carMakes[selectedManufacturer].logo}
            alt={carDetails.logo}
            className="w-1/4 hover:scale-110 transition duration-300"
          />
          <h2 className="text-5xl font-semibold underline ">{selectedModel}</h2>
        </div>
        <p className="mt-5 mb-5">{carDetails.description}</p>
      </div>
      <div className="flex flex-col w-full mt-3">
        <div className={descriptionStylesTwo}>
          <p className={boldFont}>Weight:</p>
          <p className={rightText}>{carDetails.weight}</p>
        </div>
        <div className={descriptionStylesOne}>
          <p className={boldFont}>Torque:</p>
          <p className={rightText}>{carDetails.torque}</p>
        </div>
        <div className={descriptionStylesTwo}>
          <p className={boldFont}>Horsepower:</p>
          <p className={rightText}>{carDetails.horsepower}</p>
        </div>
        <div className={descriptionStylesOne}>
          <p className={boldFont}>Engine:</p>
          <p className={rightText}>{carDetails.engine}</p>
        </div>
        <div className={descriptionStylesTwo}>
          <p className={boldFont}>0 to 60 mph:</p>
          <p className={rightText}>{carDetails.speed} seconds</p>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
