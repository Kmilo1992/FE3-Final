import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {loading, state } = useContext(ContextGlobal);

  return (
    <main className={`home_container ${state.theme}`}>
      <h1>Home</h1>
      {loading ? (
        "Cargando..."
      ) : (
        <div className="card-grid">
          {state.data.map((dentist) => {
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
      )}
    </main>
  );
};

export default Home;
