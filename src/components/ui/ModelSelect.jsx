import React from "react";

function ModelSelect({
  selectedManufacturer,
  selectedModel,
  handleModelChange,
  carMakes,
}) {
  return (
    <div className="mb-4 flex flex-col justify-center items-center mobile:text-sm mobilelg:text-sm tablet:text-xl laptop:text-xl desktop:text-xl">
      <label
        htmlFor="modelSelect"
        className="block mb-2 text-white shadow-2xl mobile:text-xs mobilelg:text-base tablet:text-xl laptop:text-xl desktop:text-xl"
      >
        Select Car Model:
      </label>
      <select
        id="modelSelect"
        value={selectedModel}
        onChange={handleModelChange}
        className="block w-full rounded-md pt-2 pb-2 border border-gray-400 text-lg mobile:text-base mobilelg:text-base tablet:text-xl laptop:text-xl desktop:text-xl"
      >
        <option
          value=""
          className="text-center mobile:text-base mobilelg:text-base tablet:text-xl laptop:text-xl desktop:text-xl "
        >
          -- Model --
        </option>
        {Object.keys(carMakes[selectedManufacturer].cars).map((model, idx) => (
          <option
            key={idx}
            value={model}
            className="mobile:text-xl mobilelg:text-xl mobilelg:overflow-auto mobilelg:h-1/2 tablet:text-xl laptop:text-xl desktop:text-xl"
          >
            {model}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ModelSelect;
