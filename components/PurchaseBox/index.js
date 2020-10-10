import React, { Fragment } from "react";

// import static data
import { PurchaseData } from "../../utils/constants";

const PurchaseBox = () => {
  return (
    <Fragment>
      <div className="purchaseBoxContainer">
        {PurchaseData.map((item, index) => {
          return (
            <div className="purchaseBox" key={index}>
              <div className="header">
                <div className="time">
                  <p>{item.time}</p>
                </div>
                <div className="discountPrice">
                  <span>{item.discountPrice}</span>
                  <p>{item.originalPrice}</p>
                </div>
              </div>
              <div className="curve">
                <img
                  src={`../../static/assets/images/${item.curveImage}`}
                  alt="curve"
                  className="img-fluid"
                />
              </div>
              <div className="purchase">
                <button>Purchase</button>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default PurchaseBox;
