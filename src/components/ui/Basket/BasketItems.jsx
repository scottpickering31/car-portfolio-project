// BasketItems.js
import { connect } from "react-redux";
import { addToBasket } from "../../../statemanagement/actions/basketAction";

function BasketItems({ basketItem }) {
  if (!basketItem || basketItem.length === 0) {
    return <p>Your basket is empty.</p>;
  }

  return (
    <div>
      <h1>Your Basket</h1>
      {basketItem.map((item, index) => (
        <div key={index}>
          <p>Manufacturer: {item.manufacturer}</p>
          <p>Model: {item.model}</p>
          <p>Price: {item.price}</p>
          <p>Duration: {item.duration} days</p>
          <img src={item.image} alt={`${item.manufacturer} ${item.model}`} />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketItem: state.basket.basketItem,
});

const mapDispatchToProps = {
  addToBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketItems);
