import React, { Component } from "react";
import { connect } from "react-redux";

import "../components/style/CatalogoPersonajes.css";

import { setLista } from "../redux/actions";
import { Image, Card, Icon } from "semantic-ui-react";

const URL_API = "https://rickandmortyapi.com/api/character/";
let arr = [];

class CatalogoPersonajes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
    };
  }

  componentWillMount() {
    this.fetchAsync();
  }
  fetchAsync = async () => {
    try {
      const data1 = await this.fetchData();
      //const data2 = await this.loadingFinish();
    } catch (error) {
      console.error(error);
    }
  };
  fetchData = () => {
    fetch(URL_API)
      .then((response) => response.json())
      //.then((data) => console.log("data >> ", data.results))
      .then((data) => {
        this.setState({ lista: data.results });
      })
      .then(() => this.props.setLista(this.state.lista))
      .catch((err) => console.error(err));
  };
  render() {
    const { lista } = this.state;
    console.log("lista :>> ", lista);
    const PERSONAJES = lista.map((item, i) => {
      return (
        <div key={i} className='Container__Personajes--Cartas'>
          <img src={item.image} alt='imagenPersonaje' />
          <h4>{item.name}</h4>
          <section className='Container__Personajes--Cartas__info'>
            <section>
              <p>Estado:{item.status}</p>
              <p>Especie{item.species}</p>
              <p>Genero:{item.gender}</p>
            </section>
            <section>
              <p>Id:{item.id}</p>
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

    return <div className='Container__Personajes'>{PERSONAJES}</div>;
  }
}
const mapDispatchToProps = {
  setLista,
};
export default connect(null, mapDispatchToProps)(CatalogoPersonajes);
