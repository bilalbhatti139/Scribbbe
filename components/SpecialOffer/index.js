import React, { Fragment } from "react";

const SpecialOffer = () => {
  return (
    <Fragment>
      <div className="special-offer-container">
        <div className="title">
          <p>
            <img src="../../../static/assets/images/badge.svg" /> Very... VERY
            Special Offer <span>Until 15th september 2020.</span>
          </p>
        </div>
        <div className="details">
          <p>
            This very special and limited deal offers you Scribbbe for a
            ONE-TIME payment.
            <br /> be fast, this offer is for a limited number of users and
            period of time.
          </p>
        </div>
        <div className="learn-more-btn">
          <button>Learn More</button>
        </div>
      </div>
    </Fragment>
  );
};

export default SpecialOffer;
