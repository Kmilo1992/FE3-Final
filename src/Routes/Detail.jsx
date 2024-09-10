import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({});
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 0);
  }, []);

  const getData = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        console.log(info);
        setDentist(info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h1>Detail Dentist id </h1>
      <p>{dentist.name}</p>
      <p>{dentist.email}</p>
      <p>{dentist.phone}</p>
      <p>{dentist.website}</p>
    </>
  );
};

export default Detail;
