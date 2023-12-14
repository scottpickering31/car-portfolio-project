function BasketContents({ basketItem }) {
  return (
    <div>
      <h1>NavBar Basket</h1>
      <p>{basketItem.join(", ")}</p>
    </div>
  );
}

export default BasketContents;
