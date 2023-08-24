import Main from "./Components/Main";
import { Login } from "./Components/RenderizadoCondicional/RenderCondicional.jsx";
import { LogOut } from "./Components/RenderizadoCondicional/RenderCondicional.jsx";
import Lista from "./Components/Lista/Lista";
import { RenderElements } from "./Components/RenderizadoElementos/RenderElements.jsx";
import { RenderFrameworks } from "./Components/RenderizadoElementos/RenderElements.jsx";
import Eventos from "./Components/Eventos/Eventos";
import "./App.css";
import TituloH3 from "./Components/TituloH3/TituloH3";

function App() {
  let sesion = true;
  return (
    <>
      <section className="section__separador">
        <div className="contenedor__colores">
          <div className="colorPrincipal"></div>
          <div className="colorOscuro"></div>
          <div className="colorClaro"></div>
          <div className="colorBrillante"></div>
          <div className="colorBlanco"></div>
          <div className="colorNegro"></div>
          <div className="colorGris"></div>
          <div className="colorGrisClaro"></div>
          <div className="colorBg"></div>
        </div>
      </section>
      <section className="section__separador"></section>
      <h1>Renderizando APP</h1>
      <section className="section__separador">
        <Main />
      </section>

      <section className="section__separador">
        <h2>Props</h2>
        <Lista
          arreglo={[1, 2, 3, 4, 5, 6]}
          boleano={true}
          numero={80}
          string={"Esto es un String"}
          objeto={{ nombre: "Boris", apellido: "Bodeman" }}
          elementoReact={<i>Esto es un elementoReact</i>}
          funcion={(num) => num * num}
          componenteReact={<TituloH3 cadena="Desde componente React" />}
        ></Lista>
      </section>

      <section className="section__separador">
        <h2>STATE</h2>
      </section>

      <section className="section__separador">
        <h2>Renderizado Condicional</h2>
        {sesion ? <Login /> : <LogOut />}
      </section>

      <section className="section__separador">
        <h2>Renderizado de Elementos</h2>
        <RenderElements />
        <RenderFrameworks />
      </section>

      <section className="section__separador">
        <h2>Eventos</h2>
        <Eventos />
      </section>

      <section className="section__separador">
        <h2>Props</h2>
      </section>
    </>
  );
}

export default App;
