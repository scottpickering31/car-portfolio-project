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
        className="text-center block w-full rounded-md pt-2 pb-2 border border-gray-400 text-lg mobile:text-xl mobilelg:text-xl tablet:text-xl laptop:text-xl desktop:text-xl"
      >
        <option
          value=""
          className="mobile:text-base mobilelg:text-base tablet:text-2xl laptop:text-2xl desktop:text-2xl "
        >
          -- Model --
        </option>
        {Object.keys(carMakes[selectedManufacturer].cars).map((model, idx) => (
          <option
            key={idx}
            value={model}
            className="text-center mobile:text-2xl mobilelg:text-2xl mobilelg:overflow-auto mobilelg:h-1/2 tablet:text-2xl laptop:text-2xl desktop:text-2xl"
          >
            {model}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ModelSelect;
