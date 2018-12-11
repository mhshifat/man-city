import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = props => {
  return (
    <div style={{ background: "#ffffff" }}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
