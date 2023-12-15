function BasketContents({ basketItem }) {
  return (
    <div>
      <h1>Your Basket</h1>
      <p>{basketItem.join(", ")}</p>
    </div>
  );
}

export default BasketContents;
