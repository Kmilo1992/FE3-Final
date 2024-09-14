import { useContext } from "react";
import Form from "../Components/Form";
import { ContextGlobal } from "../Context/global.context";

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  
  return (
    <div className={`${state.theme} contact_container`}>
      <div className={`text_contact`}>
        <h1>Want to know more?</h1>
        <h3>Send us your questions and we will contact you</h3>
      </div>
      <Form />
    </div>
  );
};

export default Contact;