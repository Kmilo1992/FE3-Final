import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Context/global.context";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  const { state } = useContext(ContextGlobal);

  return (
    <div className="card">
      <img src="../../public/images/doctor.jpg" alt="Dentist" />
      <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
      </Link>
      <h3>{username}</h3>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button className={`favButton ${state.theme}`} onClick={addFav}>
        Add fav
      </button>
    </div>
  );
};

export default Card;
