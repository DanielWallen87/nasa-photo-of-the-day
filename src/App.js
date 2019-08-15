import React from "react";
import axios from "axios";
import "./App.css";
import CreateEntry from "./components/CreateEntry";
// import Lettering from "./components/Lettering";

function App() {
  return (
    <div className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA */}
        {/* app! Have fun 🚀! */}
      </p>
      <CreateEntry />
      {/* <Title />
      <Picture />
      <Date />
      <Text /> */}
    </div>
  );
}

export default App;
