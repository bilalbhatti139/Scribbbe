import React, { Fragment } from "react";

// import components

import Header from "../Common/Header";
import Footer from "../Common/Footer";

// import bootstrap components
import Container from "react-bootstrap/Container";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="headerContainer">
        <Container fluid>
          <Header />
        </Container>
      </div>
      <Container>{children}</Container>
    </Fragment>
  );
};

export default Layout;
