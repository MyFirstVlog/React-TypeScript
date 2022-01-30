import { Contador } from "./components/Contador";
import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <>
      <strong>Hola Mundo</strong>
      <hr/>

      <Counter />

      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr/>

      <TimerPadre />

      <h2>use reducer</h2>
      <hr />
      <Contador />

    </>
  );
}

export default App;
