import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Context/global.context";
import { useEffect } from "react";

const Favs = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    dispatch({ type: "STATE_CARD", payload: "favs" });
  }, [state.stateCard]);

  return (
    <div className={`home_container ${state.theme}`}>
      <h1>Dentists Favs</h1>
      {state.favs.length > 0 ? (
        <div className="card-grid">
          {state.favs.map((element) => {
            return <Card key={element.id} dentist={element} />;
          })}
        </div>
      ) : (
        <h2 style={{ textAlign: "center", color: "rgba(13, 26, 68, 0.808)" }}>
          ...Empty list of favorite dentists...
        </h2>
      )}
    </div>
  );
};

export default Favs;
