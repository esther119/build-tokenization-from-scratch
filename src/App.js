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
import CodeChecker from "./testCode/8Code";

function App() {
  return (
    <div className="App bg-gray-100 flex flex-col items-center justify-center overflow-x-hidden mx-4 lg:mx-2 xl:mx-4 2xl:mx-6">
      {/* <Intro></Intro> */}
      {/* <TokenHowTo></TokenHowTo>
      <TokenizationIntro />
      <ASCII></ASCII>
      <BytePairingAlgorithm />
      <TakeAway></TakeAway>
      <References></References> */}
      <CodeChecker></CodeChecker>
    </div>
  );
}

export default App;
