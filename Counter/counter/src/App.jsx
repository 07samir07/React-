import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    // console.log("value addded", Math.random());
    // counter++;
    if (counter < 20) {
      setCounter(counter + 1);
    }
    if (counter == 20) {
      setCounter((counter = 0));
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1> Like metrics</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <br />
      <footer>footer:{counter}</footer>
    </>
  );
}

export default App;
