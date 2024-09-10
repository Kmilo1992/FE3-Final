import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

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
        setDentists(info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => {
          return (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
