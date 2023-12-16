import { connect } from "react-redux";
import { addToBasket } from "../../../redux/actions/basketAction";

function AddToBasketButton({ addToBasket }) {
  return (
    <div>
      <button
        style={{ margin: "20px", display: "inline-block" }}
        onClick={addToBasket}
      >
        Add To Basket
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  addToBasket,
};

export default connect(null, mapDispatchToProps)(AddToBasketButton);
