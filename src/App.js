// App.js
import React from "react";
import "./App.css";
import BytePairingAlgorithm from "./writing/Part1/5bytePairing";
import TokenizationIntro from "./writing/Part1/3tokenizationIntro";
import Intro from "./writing/Part1/1Intro";
import ASCII from "./writing/Part1/4ASCII";
import TokenHowTo from "./writing/Part1/2tokenHowTo";
import TakeAway from "./writing/Part1/6Takeaway";
import References from "./writing/Part1/7resources";
import CodeChecker from "./testCode/8Code";
import TextInput from "./testCode/9TextBox";
import DisplayComment from "./testCode/displayComment";
import Part2Zero from "./writing/Part2/0";

function App() {
  return (
    <div className="App bg-gray-100 flex flex-col items-center justify-center overflow-x-hidden mx-4 lg:mx-2 xl:mx-4 2xl:mx-6">
      {/* <Intro></Intro>
      <TokenHowTo></TokenHowTo>
      <TokenizationIntro />
      <ASCII></ASCII>
      <BytePairingAlgorithm />
      <TakeAway></TakeAway>
      <References></References> */}
      <Part2Zero></Part2Zero>

      <CodeChecker></CodeChecker>
    </div>
  );
}

export default App;
