import Head from "next/head";
import React from "react";

// import layout
import Layout from "../components/Layout";

// import styles

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />

        <title>Scribbbe</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
