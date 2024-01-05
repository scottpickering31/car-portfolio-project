import { connect } from "react-redux";
import { togglePricing } from "../../../statemanagement/actions/pricingAction";

function PriceButton({ togglePricing }) {
  return (
    <div className="h-20 w-40 text-xl justify-center bg-customOrange-lighter flex text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-orange-400 hover:shadow-lg focus:outline-none focus:ring focus:ring-orange-400 focus:ring-opacity-50">
      <button onClick={togglePricing}>Pricing Details</button>
    </div>
  );
}

const mapDispatchToProps = {
  togglePricing,
};

export default connect(null, mapDispatchToProps)(PriceButton);
