import { useState } from "react";

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  const incrementar = (numero: number = 1):void => {
    setCounter((c) => c + numero );
  }

  return (<div className="mt-5">
      <h3>Counter: UseState</h3>
      <span>Valor: {counter}</span>
      <br/>
      <button onClick={() => incrementar()} className="btn btn-outline-primary">
          +1
      </button>

      <button onClick={() => incrementar(2)} className="btn btn-outline-primary">
          +2
      </button>

      <button onClick={() => setCounter(0)} className="btn btn-outline-danger">
          reset
      </button>
  </div>)
};
