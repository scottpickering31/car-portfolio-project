// BrandSelect.js
import React from "react";

function ManufacturerSelect({
  carManufacturer,
  selectedManufacturer,
  handleManufacturerChange,
}) {
  return (
    <div className="mb-4 flex flex-col justify-center items-center mobile:text-sm mobilelg:text-sm tablet:text-xl laptop:text-xl desktop:text-xl">
      <label
        htmlFor="manufacturerSelect"
        className="block mb-2 text-white shadow-2xl mobile:text-xs mobilelg:text-base tablet:text-xl laptop:text-xl desktop:text-xl"
      >
        Select Manufacturer:
      </label>
      <select
        id="manufacturerSelect"
        value={selectedManufacturer}
        onChange={handleManufacturerChange}
        className="text-center block w-full rounded-md pt-2 pb-2 border border-gray-400 text-lg mobile:text-xl mobilelg:text-xl tablet:text-xl laptop:text-xl desktop:text-xl"
      >
        <option
          value=""
          className="mobile:text-base mobilelg:text-base tablet:text-2xl laptop:text-2xl desktop:text-2xl "
        >
          -- Manufacturer --
        </option>
        {carManufacturer.map((manufacturer, index) => (
          <option
            key={index}
            value={manufacturer}
            className=" mobile:text-2xl mobilelg:text-2xl mobilelg:overflow-auto mobilelg:h-1/2 tablet:text-2xl laptop:text-2xl desktop:text-2xl"
          >
            {manufacturer}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ManufacturerSelect;
