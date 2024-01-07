// BasketItems.js
import { connect } from "react-redux";
import { removeFromBasket } from "../../../statemanagement/actions/basketAction";
import SeeCostBreakDown from "../Buttons/SeeCostBreakDown";

function BasketItems({ basketItem, removeFromBasket }) {
  if (!basketItem || basketItem.length === 0) {
    return <p className="text-center">Your basket is empty.</p>;
  }

  function removeItem(index) {
    removeFromBasket(index);
  }

  return (
    <div className="flex flex-col justify-between w-full p-5 ">
      <h1 className="bg-customBlue mb-5 text-white text-center p-5 text-2xl font-bold tracking-wide rounded-full">
        Step 3 - Review your Choice(s) and Checkout!
      </h1>
      <h1 className="text-center">Your Basket</h1>
      {basketItem.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center border border-white m-5 bg-white p-6 w-full h-40 justify-around rounded-xl shadow-lg"
        >
          <div>
            <p>
              <strong>Manufacturer:</strong> {item.manufacturer}
            </p>
            <p>
              <strong>Model:</strong> {item.model}
            </p>
            <p>
              <strong>Total Price:</strong> £{item.price}
            </p>
            <p>
              <strong>Rental Duration:</strong> {item.duration} days
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={item.image}
              alt={`${item.manufacturer} ${item.model}`}
              className="w-40 rounded-full"
            />
          </div>
          <SeeCostBreakDown />
          <button
            onClick={() => removeItem(index)}
            className="bg-red-500 h-12 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:red-500 hover:shadow-lg focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50"
          >
            Remove Car
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
