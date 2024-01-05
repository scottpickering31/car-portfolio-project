// BrandSelect.js
import React from "react";

function ManufacturerSelect({
  carManufacturer,
  selectedManufacturer,
  handleManufacturerChange,
}) {
  return (
    <div className="mb-4">
      <label htmlFor="manufacturerSelect" className="block mb-2 text-white">
        Select Manufacturer:
      </label>
      <select
        id="manufacturerSelect"
        value={selectedManufacturer}
        onChange={handleManufacturerChange}
        className="block w-full rounded-md border border-gray-400 p-2"
      >
        <option value="">Select a Manufacturer</option>
        {carManufacturer.map((manufacturer, index) => (
          <option key={index} value={manufacturer}>
            {manufacturer}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ManufacturerSelect;
