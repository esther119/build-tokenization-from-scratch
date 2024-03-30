// App.js
import React from "react";
import "./App.css";
import BytePairingAlgorithm from "./bytePairing";
import CodeRunner from "./codeRunner"; // Import CodeRunner

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <BytePairingAlgorithm />
      <CodeRunner initialCode='print("Edit this code!")' />{" "}
      {/* Pass initial code as prop */}
    </div>
  );
}

export default App;
