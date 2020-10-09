import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { navBarHideFrom } from "../../utils/constants";

// import components
import NavBar from "../Common/Navbar";
import Sidebar from "../Common/Sidebar";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

import s from "../../styles/layout.module.css";

// import bootstrap components
import Container from "react-bootstrap/Container";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <Fragment>
      {navBarHideFrom.indexOf(router.pathname) == -1 ? (
        <Fragment>
          <NavBar />
          <Sidebar />
          <div className={s.contentContainer}>
            <div className={s.content}>{children}</div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Container>
            <Header />
            {children}
          </Container>
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Layout;
