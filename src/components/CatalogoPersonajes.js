import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { Image, Card, Icon } from "semantic-ui-react";

import "../components/style/CatalogoPersonajes.css";
import { setLista } from "../redux/actions";

const CatalogoPersonajes = ({ url }) => {
  const [state, setState] = useState({ lista: [] });
  useEffect(() => {
    const cargar = async () => {
      const resultado = await Axios.get(url);
      setState({ lista: resultado.data.results });
      setLista(resultado.data.results);
    };
    cargar();
  }, [url]);
  const PERSONAJES = state.lista.map((item, i) => {
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
  console.log("lista :>> ", state.lista);

  return (
    <>
      {!state.lista ? (
        <div>cargando...{url}</div>
      ) : (
        <div className='Container__Personajes'>{PERSONAJES}</div>
      )}
    </>
  );
};
const mapDispatchToProps = {
  setLista,
};
export default connect(null, mapDispatchToProps)(CatalogoPersonajes);

// class CatalogoPersonajes extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lista: [],
//     };
//   }

//   componentWillMount() {
//     this.fetchAsync();
//   }
//   fetchAsync = async () => {
//     try {
//       const data1 = await this.fetchData();
//       //const data2 = await this.loadingFinish();
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   fetchData = () => {
//     fetch(URL_API)
//       .then((response) => response.json())
//       //.then((data) => console.log("data >> ", data.results))
//       .then((data) => {
//         this.setState({ lista: data.results });
//       })
//       .then(() => this.props.setLista(this.state.lista))
//       .catch((err) => console.error(err));
//   };
//   render() {
//     const { lista } = this.state;
//     console.log("lista :>> ", lista);
//     const PERSONAJES = lista.map((item, i) => {
//       return (
//         <div key={i} className='Container__Personajes--Cartas'>
//           <img src={item.image} alt='imagenPersonaje' />
//           <h4>{item.name}</h4>
//           <section className='Container__Personajes--Cartas__info'>
//             <section>
//               <p>
//                 <Icon name='heartbeat' />
//                 {item.status}
//               </p>
//               <p>
//                 <Icon name='dna' />
//                 {item.species}
//               </p>
//               <p>
//                 {item.gender == "Male" ? (
//                   <Icon name='mars' />
//                 ) : item.gender == "Female" ? (
//                   <Icon name='venus' />
//                 ) : (
//                   <Icon name='transgender' />
//                 )}
//                 {item.gender}
//               </p>
//             </section>
//             <section>
//               <p>ID:{item.id}</p>
//               <p>
//                 <Icon name='map marker alternate' />
//                 {item.location.name}
//               </p>
//               <p>
//                 <Icon name='flag' />
//                 {item.origin.name}
//               </p>
//             </section>
//           </section>
//         </div>
//       );
//     });

//     return <div className='Container__Personajes'>{PERSONAJES}</div>;
//   }
// }
