// BasketItems.js
import { connect } from "react-redux";
import { removeFromBasket } from "../../../statemanagement/actions/basketAction";

function BasketItems({ basketItem, removeFromBasket }) {
  if (!basketItem || basketItem.length === 0) {
    return <p>Your basket is empty.</p>;
  }

  function removeItem(index) {
    console.log("Removing item at index:", index);
    removeFromBasket(index);
  }

  return (
    <div>
      <h1>Your Basket</h1>
      {basketItem.map((item, index) => (
        <div key={index}>
          <p>Manufacturer: {item.manufacturer}</p>
          <p>Model: {item.model}</p>
          <p>Total Price: {item.price}</p>
          <p>Rental Duration: {item.duration} days</p>
          <img src={item.image} alt={`${item.manufacturer} ${item.model}`} />
          <button onClick={() => removeItem(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketItem: state.basket.basketItem,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromBasket: (index) => dispatch(removeFromBasket(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItems);
