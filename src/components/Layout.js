import React from "react";

import NavBar from "./NavBar";
import FooterBar from "./FooterBar";

const Layout = (props) => {
  return (
    <section>
      <NavBar />
      {props.children}
      <FooterBar />
    </section>
  );
};

export default Layout;
