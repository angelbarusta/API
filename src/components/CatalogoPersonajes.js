import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { Image, Card, Icon } from "semantic-ui-react";

import "../components/style/CatalogoPersonajes.css";
import { setLista } from "../redux/actions";

//-----------------------------------------------------SIN REDUX-----------------------------------------------------
// const CatalogoPersonajes = ({ url }) => {
//   const [personajes, setPersonajes] = useState({ lista: [] });
//   useEffect(() => {
//     const cargar = async () => {
//       const resultado = await Axios.get(url);
//       setPersonajes({ lista: resultado.data.results });
//     };
//     cargar();
//   }, [url]);
//   const PERSONAJES = personajes.lista.map((item, i) => {
//     return (
//       <div key={i} className='Container__Personajes--Cartas'>
//         <img src={item.image} alt='imagenPersonaje' />
//         <h4>{item.name}</h4>
//         <section className='Container__Personajes--Cartas__info'>
//           <section>
//             <p>
//               <Icon name='heartbeat' />
//               {item.status}
//             </p>
//             <p>
//               <Icon name='dna' />
//               {item.species}
//             </p>
//             <p>
//               {item.gender == "Male" ? (
//                 <Icon name='mars' />
//               ) : item.gender == "Female" ? (
//                 <Icon name='venus' />
//               ) : (
//                 <Icon name='transgender' />
//               )}
//               {item.gender}
//             </p>
//           </section>
//           <section>
//             <p>ID:{item.id}</p>
//             <p>
//               <Icon name='map marker alternate' />
//               {item.location.name}
//             </p>
//             <p>
//               <Icon name='flag' />
//               {item.origin.name}
//             </p>
//           </section>
//         </section>
//       </div>
//     );
//   });
//   console.log("lista :>> ", personajes.lista);
//   return (
//     <>
//       {!personajes.lista ? (
//         <div>cargando...{url}</div>
//       ) : (
//         <div className='Container__Personajes'>{PERSONAJES}</div>
//       )}
//     </>
//   );
// };
// export default CatalogoPersonajes;

//------------------------------------CON REDUX------------------------------------------------------------------
const CatalogoPersonajes = ({ url }) => {
  const [personajes, setPersonajes] = useState({ lista: [] });
  const myList = useSelector((state) => state.myList);
  const dispatch = useDispatch();
  useEffect(() => {
    const cargar = async () => {
      const resultado = await Axios.get(url);
      setPersonajes({ lista: resultado.data.results });
      const payload = resultado.data.results;
      dispatch({
        type: "SET_LIST", // cuidado con los nombres al llamr en los reducers debe ser exactam,ente los mismo
        payload,
      });
    };
    cargar();
  }, [url]);
  const PERSONAJES = personajes.lista.map((item, i) => {
    return (
      <div key={i} className='Container__Personajes--Cartas'>
        <img src={item.image} alt='imagenPersonaje' />
        <h4>{item.name}</h4>
        <section className='Container__Personajes--Cartas__info'>
          <section>
            <p>
              <Icon name='heartbeat' />
              {item.status}
            </p>
            <p>
              <Icon name='dna' />
              {item.species}
            </p>
            <p>
              {item.gender == "Male" ? (
                <Icon name='mars' />
              ) : item.gender == "Female" ? (
                <Icon name='venus' />
              ) : (
                <Icon name='transgender' />
              )}
              {item.gender}
            </p>
          </section>
          <section>
            <p>ID:{item.id}</p>
            <p>
              <Icon name='map marker alternate' />
              {item.location.name}
            </p>
            <p>
              <Icon name='flag' />
              {item.origin.name}
            </p>
          </section>
        </section>
      </div>
    );
  });
  console.log("lista :>> ", personajes.lista);
  console.log("myList :>> ", myList);
  return (
    <>
      {!personajes.lista ? (
        <div>cargando...{url}</div>
      ) : (
        <div className='Container__Personajes'>{PERSONAJES}</div>
      )}
    </>
  );
};
export default CatalogoPersonajes;
