import { connect } from "react-redux";
import { resetBasket } from "../../../statemanagement/actions/basketAction";

function ResetBasketAmountButton({ resetBasket }) {
  return (
    <div>
      <button
        onClick={resetBasket}
        className="bg-customOrange-lighter text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-orange-400 hover:shadow-lg focus:outline-none focus:ring focus:ring-orange-400 focus:ring-opacity-50"
      >
        Reset Basket
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  resetBasket,
};

export default connect(null, mapDispatchToProps)(ResetBasketAmountButton);
