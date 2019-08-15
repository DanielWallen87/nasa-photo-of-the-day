import React, { useState, useEffect } from "react";
import "./App.css";
import CreateEntry from "./components/CreateEntry";

function App() {

  return (
    <div className="App">
      <CreateEntry />
    </div>
  );
}

export default App;

// App converts data received from "CreateEntry" into a view.