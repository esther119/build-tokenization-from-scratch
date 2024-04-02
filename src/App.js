// App.js
import React from "react";
import "./App.css";
import BytePairingAlgorithm from "./bytePairing";
import TokenizationIntro from "./writing/tokenizationIntro";
import Intro from "./writing/Intro";
import ASCII from "./writing/ASCII";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Intro></Intro>
      <TokenizationIntro />
      <ASCII></ASCII>
      <BytePairingAlgorithm />
    </div>
  );
}

export default App;
