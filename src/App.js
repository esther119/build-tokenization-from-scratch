// App.js
import React from "react";
import "./App.css";
import BytePairingAlgorithm from "./writing/5bytePairing";
import TokenizationIntro from "./writing/3tokenizationIntro";
import Intro from "./writing/1Intro";
import ASCII from "./writing/4ASCII";
import TokenHowTo from "./writing/2tokenHowTo";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Intro></Intro>
      <TokenHowTo></TokenHowTo>
      <TokenizationIntro />
      <ASCII></ASCII>
      <BytePairingAlgorithm />
    </div>
  );
}

export default App;
