import React, { Fragment } from "react";

// import components
import SpecialOffer from "../components/SpecialOffer";
import PurchaseBox from "../components/PurchaseBox";

const Home = () => {
  return (
    <Fragment>
      <SpecialOffer />
      <PurchaseBox />
    </Fragment>
  );
};

export default Home;
