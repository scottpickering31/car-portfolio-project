import React from "react";
import { connect } from "react-redux";

function BasketIcon({ basketCount }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <i className="fa fa-shopping-basket" style={{ fontSize: "30px" }}></i>
      <p>{basketCount}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basketCount: state.basket.basketCount,
  };
};

export default connect(mapStateToProps)(BasketIcon);
