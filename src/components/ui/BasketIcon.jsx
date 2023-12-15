function BasketIcon({ basketCount }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <i className="fa fa-shopping-basket" style={{ fontSize: "30px" }}></i>
      <p>{basketCount}</p>
    </div>
  );
}

export default BasketIcon;
