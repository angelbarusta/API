import React, { useEffect, useState } from "react";

import "../pages/style/Home.css";
import CatalogoPersonajes from "../components/CatalogoPersonajes";

const Home = () => {
  const [pag, setChangePage] = useState(1);
  return (
    <div className='Container__Home'>
      <section className='Menu__Bar'>
        <div>
          <button onClick={() => setChangePage(pag + 1)}>Next</button>
          {pag > 1 && (
            <button onClick={() => setChangePage(pag - 1)}>Prev</button>
          )}
        </div>
      </section>
      <section className='Data__content'>
        {pag > 0 && <CatalogoPersonajes pag={pag} />}
      </section>
    </div>
  );
};

export default Home;
