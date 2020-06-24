import React, { useState, useEffect } from "react";
import Axios from "axios";

const axios = ({ url }) => {
  const [datos, setDatos] = useState(null);
  useEffect(() => {
    const cargar = async () => {
      const resultado = await Axios.get(url);
      setDatos(resultado.data);
    };
    cargar();
  }, [url]);

  if (!datos) {
    return <div>cargando...{url}</div>;
  }
  return <div>{JSON.stringify(url)}</div>;
};

export default axios;
