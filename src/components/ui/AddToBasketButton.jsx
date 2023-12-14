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
  
  export default AddToBasketButton;