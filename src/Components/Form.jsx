import React, { useContext, useState } from "react";
import Message from "./Message";
import { ContextGlobal } from "../Context/global.context";

const Form = () => {
  let infoUser = {
    name: "",
    email: "",
  };
  const [user, setUser] = useState(infoUser);
  const [verify, setVerify] = useState(0);
  const { state } = useContext(ContextGlobal);

  /* ======================= validation ======================= */

  const validateName = (data) => {
    let newData = data.trim();
    let validated = false;
    if (newData.length > 5) {
      validated = true;
      setUser({ ...user, name: newData });
    }
    return validated;
  };

  const validateEmail = (data) => {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let validated = false;
    if (regex.test(data)) {
      validated = true;
    }
    return validated;
  };

  /* ========================================================== */
  //Aqui deberan implementar el form completo con sus validaciones

  const handleName = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validatedName = validateName(user.name);
    let validatedEmail = validateEmail(user.email);
    console.log(validatedName);
    console.log(validatedEmail);
    if (validatedName && validatedEmail) {
      console.log("Name: " + user.name + "; Email: " + user.email);
      setVerify(2);
    } else {
      setVerify(1);
    }
  };

  return (
    <div className={`form_container`}>
      <form className={`form`} onSubmit={handleSubmit}>
        <div className={`input_label`}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" onChange={handleName} />
        </div>
        <div className={`input_label`}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" onChange={handleEmail} />
        </div>
        <button className={`${state.theme} favButton btn_send`}>Send</button>
      </form>
      {verify !== 0 && <Message user={user} verify={verify} />}
    </div>
  );
};

export default Form;
