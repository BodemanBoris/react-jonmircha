import { useState } from "react";
const Eventos = () => {
  const [contador, setContador] = useState(0);

  const sumarContador = () => {
    setContador(contador + 1);
  };

  const restarContador = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <p style={{ padding: "1rem", textAlign: "center" }}>
        <b>{contador}</b>
      </p>
      <button onClick={restarContador}>RESTAR</button>

      <button onClick={sumarContador}>SUMAR</button>
    </>
  );
};

export default Eventos;
