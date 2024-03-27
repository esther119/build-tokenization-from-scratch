import "./App.css";
import BytePairingAlgorithm from "./bytePairing";
import { PythonProvider } from "react-py";
import Codeblock from "./codeBlock";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <BytePairingAlgorithm></BytePairingAlgorithm>
      <PythonProvider>
        <Codeblock />
      </PythonProvider>
    </div>
  );
}

export default App;
