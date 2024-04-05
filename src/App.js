// App.js
import React from "react";
import "./App.css";
import BytePairingAlgorithm from "./writing/5bytePairing";
import TokenizationIntro from "./writing/3tokenizationIntro";
import Intro from "./writing/1Intro";
import ASCII from "./writing/4ASCII";
import TokenHowTo from "./writing/2tokenHowTo";
import TakeAway from "./writing/6Takeaway";
import References from "./writing/7resources";
import Test from "./writing/0test";

function App() {
  return (
    <div className="App bg-gray-100 flex flex-col items-center justify-center overflow-x-hidden mx-10 lg:mx-8 xl:mx-10 2xl:mx-12">
      <Test></Test>
      <Intro></Intro>
      <TokenHowTo></TokenHowTo>
      <TokenizationIntro />
      <ASCII></ASCII>
      <BytePairingAlgorithm />
      <TakeAway></TakeAway>
      <References></References>
    </div>
  );
}

export default App;
