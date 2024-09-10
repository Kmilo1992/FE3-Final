import React, { useState } from "react";
import Message from "./Message";

const Form = () => {
  let infoUser = {
    name: "",
    email: "",
  };
  const [user, setUser] = useState(infoUser);
  const [verify, setVerify] = useState(0);

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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" onChange={handleName} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onChange={handleEmail} />
        <button>Send</button>
      </form>
      {verify == 2 ? (
        <Message user={user} />
      ) : (
        verify == 1 && "Por favor verifique su información nuevamente"
      )}
    </div>
  );
};

export default Form;
