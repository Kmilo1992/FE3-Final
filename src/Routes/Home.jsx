import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Context/global.context";
import { useEffect } from "react";

const Home = () => {
  const { loading, state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    dispatch({ type: "STATE_CARD", payload: "home" });
  }, []);

  return (
    <main className={`home_container ${state.theme}`}>
      <h1>Home</h1>
      {loading ? (
        <h2 style={{textAlign: "center"}}>Cargando...</h2>
      ) : (
        <div className="card-grid">
          {state.data.map((element) => {
            return <Card key={element.id} dentist={element} />;
          })}
        </div>
      )}
    </main>
  );
};

export default Home;
