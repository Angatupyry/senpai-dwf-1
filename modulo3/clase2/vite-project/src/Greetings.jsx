//props
export const Greetings = (props) => {
  const algo = 25;

  const funcionQueCambiiaAlgo = () => {
    return algo + 25;
  };
  return (
    <>
      <p>
        ¡Hola, {props.nombre} {props.apellido}!
      </p>
      <p>¡Chau, {funcionQueCambiiaAlgo()}!</p>
    </>
  );
};
