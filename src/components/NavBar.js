import React from "react";

import "../components/style/NavBar.css";

const NavBar = () => {
  return (
    <header className='Container__Nav'>
      <section className='Container__Nav--Logo'>logo</section>
      <section className='Container__Nav--AccountMenu'>
        <div>
          <p>menu</p>
        </div>
        <div>
          <p>menu</p>
        </div>
        <div>
          <img src='' alt='Perfil' />
        </div>
      </section>
    </header>
  );
};

export default NavBar;
