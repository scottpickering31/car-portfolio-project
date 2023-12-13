import PricingRates from "./ui/PricingRates";

function PricingStructure({
  selectedModel,
  pricing,
  selectedManufacturer,
  carMakes,
}) {
  return (
    <div>
      <PricingRates
        selectedModel={selectedModel}
        pricing={pricing}
        selectedManufacturer={selectedManufacturer}
        carMakes={carMakes}
      />
      <br></br>
      <button>Add to basket</button>
    </div>
  );
}

export default PricingStructure;
