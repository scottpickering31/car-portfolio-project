import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { removeFromBasket } from "../../../statemanagement/actions/basketAction";

function BasketItems({ basketItem, removeFromBasket }) {
  const [notification, setNotification] = useState("");

  function removeItem(index) {
    const removedItem = basketItem[index];
    removeFromBasket(index);
    setNotification(`${removedItem.manufacturer} ${removedItem.model} removed`);
    setTimeout(() => {
      setNotification("");
    }, 2000);
  }

  useEffect(() => {
    if (basketItem.length === 0) {
      setNotification("");
    }
  }, [basketItem]);

  if (!basketItem || basketItem.length === 0) {
    return <p className="text-center">Your basket is empty.</p>;
  }

  return (
    <div className="flex flex-col justify-between w-full p-5 ">
      {notification && (
        <div className="bg-red-500 text-white text-center p-2 mb-4 rounded-md">
          {notification}
        </div>
      )}

      <h1 className="bg-customBlue mb-5 font-roboto text-white text-center p-5 text-2xl font-bold tracking-widest rounded-2xl">
        STEP 3 - REVIEW YOUR CHOICE(S) AND CHECKOUT
      </h1>
      <h1 className="text-center">Your Basket</h1>
      {basketItem.map((item, index) => (
        <div
          key={index}
          className="flex tracking-wide text-xl flex-row items-center border border-white m-5 bg-white p-6 w-full h-40 justify-around rounded-xl shadow-lg"
        >
          <div>
            <p>
              <strong>Manufacturer:</strong> {item.manufacturer}
            </p>
            <p>
              <strong>Model:</strong> {item.model}
            </p>
            <p>
              <strong>Rental Total:</strong> £{item.price.toLocaleString()}
            </p>
            <p>
              <strong>Rental Duration:</strong> {item.duration} days
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={item.image}
              alt={`${item.manufacturer} ${item.model}`}
              className="w-72 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div
              onClick={() => removeItem(index)}
              className="bg-red-500 cursor-pointer h-12 flex flex-row items-center gap-2 text-white font-semibold py-2 px-2 rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-red- hover:shadow-lg focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50"
            >
              <img
                src="src/assets/FontAwesome/trash-can-solid.svg"
                className="h-5"
              />
              <button>Remove</button>
            </div>
          </div>
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
