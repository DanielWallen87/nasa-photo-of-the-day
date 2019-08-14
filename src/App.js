import React from "react";
import axios from "axios";
import "./App.css";
import CreateEntry from "./components/CreateEntry";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <CreateEntry />
    </div>
  );
}

export default App;
