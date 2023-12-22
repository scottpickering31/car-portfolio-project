import PricingRates from "./PricingRates";

function PricingStructure({ selectedModel, selectedManufacturer, carMakes }) {
  return (
    <div>
      <div>
        <PricingRates
          selectedModel={selectedModel}
          selectedManufacturer={selectedManufacturer}
          carMakes={carMakes}
        />
      </div>
    </div>
  );
}

export default PricingStructure;
