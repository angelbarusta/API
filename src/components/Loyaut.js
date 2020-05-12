import React from "react";

import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";

const Loyaut = (props) => {
  return (
    <section>
      <NavBar />
      {props.children}
      <FooterBar />
    </section>
  );
};

export default Loyaut;
