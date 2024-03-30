// App.js
import React from "react";
import "./App.css";
import BytePairingAlgorithm from "./bytePairing";
import CodeRunner from "./codeRunner"; // Import CodeRunner
import TokenizationIntro from "./writing/tokenizationIntro";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <TokenizationIntro />
      <BytePairingAlgorithm />
      <CodeRunner initialCode='print("Edit this code!")' />{" "}
    </div>
  );
}

export default App;
