function BasketIcon({ basketCount, resetBasket }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <i className="fa fa-shopping-basket" style={{ fontSize: "30px" }}>
        {" "}
      </i>
      {basketCount}
      <button onClick={resetBasket}>Reset Basket</button>
    </div>
  );
}

export default BasketIcon;
