import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Context/global.context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const MySwal = withReactContent(Swal);

  const clickHome = () => {
    let encontrado = false;
    state.favs.map((element) => {
      if (element.id === dentist.id) {
        encontrado = true;
      }
    });
    let icon = "";
    let title = "";
    if (!encontrado) {
      addFav();
      icon = "success";
      title = "Dentist has been added!";
    } else {
      icon = "info";
      title = "Dentist already added!";
    }
    const Toast = MySwal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1200,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: icon,
      title: title,
    });
  };

  const clickFavs = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You will remove this dentist from favorites!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "rgb(219, 40, 40)",
      confirmButtonText: "Remove!",
    }).then((result) => {
      if (result.isConfirmed) {
        let getLS = state.favs;
        let listo = getLS.filter((remove) => remove.id !== dentist.id);
        dispatch({ type: "MODIFY_FAVS", payload: listo });
        Swal.fire({
          title: "Remove!",
          text: "Dentist has been removed.",
          icon: "success",
        });
      }
    });
  };

  const addFav = () => {
    dispatch({ type: "SET_FAVS", payload: dentist });
  };

  return (
    <div className="card">
      <img src="../../public/images/doctor.jpg" alt="Dentist" />
      <Link to={`/detail/${dentist.id}`}>
        <h3>{dentist.name}</h3>
      </Link>
      <h3>{dentist.username}</h3>
      {state.stateCard == "home" ? (
        <button className={`favButton ${state.theme}`} onClick={clickHome}>
          ⭐
        </button>
      ) : (
        <button
          style={{ backgroundColor: "rgb(219, 40, 40)" }}
          className={`favButton ${state.theme}`}
          onClick={clickFavs}
        >
          🗑
        </button>
      )}
    </div>
  );
};

export default Card;
