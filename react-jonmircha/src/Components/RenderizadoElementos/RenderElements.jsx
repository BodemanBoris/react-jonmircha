import lenguajes from "../../helpers/lenguajes.json";

const RenderElements = () => {
  const elementos = ["Primavera", "Verano", "Otonio", "Invierno"];
  return (
    <div>
      <p>Estaciones</p>
      <ol>
        {elementos.map((el, i) => (
          <li key={i}>{`Sesion: ${el}`}</li>
        ))}
      </ol>
    </div>
  );
};

const RenderFrameworks = () => {
  return (
    <>
      {lenguajes.frameworks.map((el) => (
        <a target="_blank" rel="noreferrer" href={el.web} key={el.id}>
          {el.name}
        </a>
      ))}
    </>
  );
};

export { RenderElements };
export { RenderFrameworks };
