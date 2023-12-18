import PricingRates from "./PricingRates";
import ShowBasketButton from "../Buttons/ShowBasketButton";

function PricingStructure({
  selectedModel,
  pricing,
  selectedManufacturer,
  carMakes,
}) {
  return (
    <div>
      <div>
        <PricingRates
          selectedModel={selectedModel}
          pricing={pricing}
          selectedManufacturer={selectedManufacturer}
          carMakes={carMakes}
        />
        <br></br>
        {pricing && (
          <div>
            <ShowBasketButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default PricingStructure;
