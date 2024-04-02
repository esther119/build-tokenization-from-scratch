// CodeRunner.js
import React, { useState } from "react";
import PythonEditor from "./pythonEditor";

function CodeRunner({ initialCode }) {
  // Initialize the code state with the initialCode prop
  const [code, setCode] = useState(initialCode || 'print("Hello, World!")');
  const [output, setOutput] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const runPythonCode = () => {
    fetch(`${backendUrl}/run_code`, {
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
    <div>
      <div className="container flex items-start">
        <div className="editor-container flex-2 px-2">
          <PythonEditor code={code} setCode={setCode} />
        </div>
        <div className="output-container flex-1 min-w-[500px] max-h-[500px] overflow-y-auto px-2">
          <div className="output border border-gray-300 p-4">
            <h2>Output</h2>
            <pre className="whitespace-pre-wrap break-words">{output}</pre>
          </div>
        </div>
      </div>
      <button
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-gradient-to-r from-purple-600 to-pink-600 transform hover:scale-105 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50 mb-8"
        onClick={runPythonCode}
      >
        Run Code
      </button>
    </div>
  );
}

export default CodeRunner;
