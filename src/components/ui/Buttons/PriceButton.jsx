import { connect } from "react-redux";
import { togglePricing } from "../../../statemanagement/actions/pricingAction";

function PriceButton({ togglePricing }) {
  return (
    <div className="relative">
      <button onClick={togglePricing}>Click for Pricing details</button>
    </div>
  );
}

const mapDispatchToProps = {
  togglePricing,
};

export default connect(null, mapDispatchToProps)(PriceButton);
