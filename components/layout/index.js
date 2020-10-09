import React, { Fragment } from "react";

// import components

import Header from "../Common/Header";
import Footer from "../Common/Footer";

// import bootstrap components
import Container from "react-bootstrap/Container";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Layout;
