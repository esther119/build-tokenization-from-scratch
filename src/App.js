import "./App.css";
import React, { useState } from "react";
import BytePairingAlgorithm from "./bytePairing";
import PythonEditor from "./pythonEditor";
// import { PythonProvider } from "react-py";
import Codeblock from "./codeBlock";
// import SyntaxHighlightComponent from "./syntaxHighlight";

const code = `
org_tokens = text.encode("utf-8") # raw bytes
org_tokens = list(map(int, org_tokens)) 


def get_stats(ids):
    counts = {}
    for pair in zip(ids, ids[1:]):
        counts[pair] = counts.get(pair, 0) + 1
    return counts

pairs = get_stats(org_tokens)
max_pair = max(pairs, key=pairs.get)
print(pairs)
pairs[max_pair]
`;
function App() {
  const [code, setCode] = useState('print("Hello, World!")');
  const [output, setOutput] = useState(""); // State to hold the output

  const runPythonCode = () => {
    fetch("http://localhost:4000/run_code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((response) => response.text())
      .then((data) => {
        setOutput(data); // Update the output state with the response
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <BytePairingAlgorithm></BytePairingAlgorithm>
      <div className="container mx-auto flex  items-start">
        <div className="editor-container flex-2 px-2">
          <PythonEditor code={code} setCode={setCode} />
        </div>
        <div className="output-container flex-1 max-h-[400px] overflow-y-auto px-2">
          <div className="output border border-gray-300 p-4">
            <h2>Output</h2>
            <pre className="whitespace-pre-wrap break-words">{output}</pre>
          </div>
        </div>
      </div>
      <button
        class="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-gradient-to-r from-purple-600 to-pink-600 transform hover:scale-105 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50 mb-8"
        onClick={runPythonCode}
      >
        Run Code
      </button>
    </div>
  );
}

export default App;
