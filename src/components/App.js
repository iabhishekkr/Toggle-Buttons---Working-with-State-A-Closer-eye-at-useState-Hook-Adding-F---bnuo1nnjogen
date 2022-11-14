import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [state1, setState1] = useState("OFF")
  const [state2, setState2] = useState("ON")
  function handleClick() {
    if (state1 == "ON") {
      setState1("OFF")
      setState2("ON")
    }
    else {
      setState1("ON")
      setState2("OFF")
    }
  }


  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
        {state1}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {state2}
      </button>
    </div>
  );
}


export default App;
