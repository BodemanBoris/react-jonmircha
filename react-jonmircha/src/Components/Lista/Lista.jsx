const Lista = ({
  objeto,
  string,
  numero,
  boleano,
  arreglo,
  elementoReact,
  funcion,
  componenteReact,
}) => {
  return (
    <>
      <ul>
        <li>{`${objeto.nombre} ${objeto.apellido}`}</li>
        <li>{string}</li>
        <li>{numero}</li>
        <li>{arreglo.join(", ")}</li>
        <li>{boleano ? "True" : "False"}</li>
        <li>{elementoReact}</li>
        <li>{arreglo.map(funcion).join(", ")}</li>
        <li>{componenteReact}</li>
      </ul>
    </>
  );
};

export default Lista;
