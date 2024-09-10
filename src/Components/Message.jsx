const message = ({ user }) => {
  return (
    <p>{`Gracias ${user.name}, te contactaremos cuando antes vía mail`}</p>
  );
};

export default message;
