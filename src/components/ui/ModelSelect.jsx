// ModelSelect.js
import React from "react";

function ModelSelect({
  selectedManufacturer,
  selectedModel,
  handleModelChange,
  carMakes,
}) {
  return (
    <div>
      <label htmlFor="modelSelect" className="block mb-2">
        Select Car Model:
      </label>
      <select
        id="modelSelect"
        value={selectedModel}
        onChange={handleModelChange}
        className="block w-full rounded-md border border-gray-400 p-2"
      >
        <option value="">Select a Car Model</option>
        {Object.keys(carMakes[selectedManufacturer].cars).map((model, idx) => (
          <option key={idx} value={model}>
            {model}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ModelSelect;
