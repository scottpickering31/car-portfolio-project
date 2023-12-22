// BasketItems.js
import { connect } from "react-redux";
import { removeFromBasket } from "../../../statemanagement/actions/basketAction";

function BasketItems({ basketItem, removeFromBasket }) {
  if (!basketItem || basketItem.length === 0) {
    return <p>Your basket is empty.</p>;
  }

  function removeItem(index) {
    removeFromBasket(index);
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-center">Your Basket</h1>
      {basketItem.map((item, index) => (
        <div
          key={index}
          className="flex flex-row border border-white m-5 bg-white p-5 w-full h-48"
        >
          <p>Manufacturer: {item.manufacturer}</p>
          <p>Model: {item.model}</p>
          <p>Total Price: {item.price}</p>
          <p>Rental Duration: {item.duration} days</p>
          <img src={item.image} alt={`${item.manufacturer} ${item.model}`} />
          <button
            onClick={() => removeItem(index)}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:red-500 hover:shadow-lg focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50"
          >
            Remove
          </button>
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
