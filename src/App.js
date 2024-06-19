import React, { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="contain">
      <h3>Click + button to increase and - button to decrease</h3>
      <h1>{count}</h1>
      <div className="but">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}
export default App;
