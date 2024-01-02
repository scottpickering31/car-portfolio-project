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
      <button onClick={handlePriceBreakdown}>
        See Detailed Cost Breakdown
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
