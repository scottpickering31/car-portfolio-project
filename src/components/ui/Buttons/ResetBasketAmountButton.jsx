import { connect } from "react-redux";
import { resetBasket } from "../../../redux/actions/basketAction";

function ResetBasketAmountButton({ resetBasket }) {
  return (
    <div>
      <button onClick={resetBasket}>Reset Basket</button>
    </div>
  );
}

const mapDispatchToProps = {
  resetBasket,
};

export default connect(null, mapDispatchToProps)(ResetBasketAmountButton);
