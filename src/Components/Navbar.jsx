import { useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "../utils/routes";
import { ContextGlobal } from "../Context/global.context";
import { useState } from "react";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const [img, setImg] = useState("../../public/images/DH.png");

  const validateTheme = () => {
    if (state.theme == "dark") {
      dispatch({ type: "light" });
      setImg("../../public/images/DH.png");
    } else {
      dispatch({ type: "dark" });
      setImg("../../public/images/DHdark.png")
    }
  };

  let style = {};
  if (state.theme == "dark") {
    style = { backgroundColor: "white" };
  }

  return (
    <nav className={`navbar_container ${state.theme}`}>
      <img src={img} alt="DH image" width={270} />
      <ul className={`link_container`}>
        <li className={`link`}>
          <Link to={routes.home}>Home</Link>
        </li>
        <li className={`link`}>
          <Link to={routes.contact}>Contact</Link>
        </li>
        <li className={`link`}>
          <Link to={routes.favs}>Favs</Link>
        </li>
        <button
          style={style}
          className={`btn_theme`}
          onClick={() => validateTheme()}
        >
          <img
            src=".:/../../../public/images/dom.png"
            alt="icon sun"
            width={20}
          />
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
