import { connect } from "react-redux";
import { updateDailyPriceBreakdown } from "../../../statemanagement/actions/basketAction";

function SeeCostBreakDown({ basketItem, updateDailyPriceBreakdown }) {
  const calculateDailyPriceBreakdown = (item) => {
    const { dailyPriceBreakdown } = item;
    console.log("Daily price breakdown: ", dailyPriceBreakdown);
    return dailyPriceBreakdown;
  };

  const handlePriceBreakdown = () => {
    basketItem.forEach((item, index) => {
      const dailyPriceBreakdown = calculateDailyPriceBreakdown(item);
      updateDailyPriceBreakdown(index, dailyPriceBreakdown);
    });
  };

  return (
    <div>
      <button
        onClick={handlePriceBreakdown}
        className="bg-customBlue h-12 text-white font-semibold py-2 px-2 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-customBlue-lighter hover:shadow-lg focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50"
      >
        Detailed Costs
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketItem: state.basket.basketItem,
});

const mapDispatchToProps = {
  updateDailyPriceBreakdown,
};

export default connect(mapStateToProps, mapDispatchToProps)(SeeCostBreakDown);
