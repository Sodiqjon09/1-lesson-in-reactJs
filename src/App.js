import "./App.css";
import Name from "./name/Name";
import Learn from "./learn/Learn";
import Rasm from "./rasm/Rasm";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const text = document.querySelector("#text");
    console.log(text);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Rasm />
        <Name />
        <Learn />

        <p id="text">lorem</p>
      </header>
    </div>
  );
}

export default App;
