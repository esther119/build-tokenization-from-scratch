import React, { useState } from "react";
import PythonEditor from "./pythonEditor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const tokens =
//   "😄 The very name strikes fear and awe into the hearts of programmers worldwide. We all know we ought to “support Unicode” in our software (whatever that means—like using wchar_t for all the strings, right?). But Unicode can be abstruse, and diving into the thousand-page Unicode Standard plus its dozens of supplementary annexes, reports, and notes can be more than a little intimidating. I don’t blame programmers for still finding the whole thing mysterious, even 30 years after Unicode’s inception.";
// function arraysEqual(a, b) {
//   if (a === b) return true;
//   if (a == null || b == null) return false;
//   if (a.length !== b.length) return false;

//   for (let i = 0; i < a.length; ++i) {
//     if (Array.isArray(a[i]) && Array.isArray(b[i])) {
//       if (!arraysEqual(a[i], b[i])) return false;
//     } else if (a[i] !== b[i]) {
//       return false;
//     }
//   }
//   return true;
// }

export default function CodeRunnerCheck({ initialCode, testCases }) {
  const [code, setCode] = useState(initialCode || 'print("Hello, World!")');
  const [output, setOutput] = useState("");
  const [success, setSuccess] = useState("");
  const [testResults, setTestResults] = useState([]);
  // const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const backendUrl = "http://127.0.0.1:4000";
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
        setOutput(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const runPythonTestCode = async () => {
    setOutput("");

    // let allResults = [];
    let isSuccess = "";
    try {
      const response = await fetch(`${backendUrl}/submit_data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }), // Sending code with input
      });
      const data = await response.text();
      console.log("data", typeof data, data);

      const output = data.result;
      // console.log("data type", typeof data, data);
      // const actualOutput = "hi";
      // console.log("user output type", typeof actualOutput, actualOutput);
      // console.log("expected output", testCase.expectedOutput);
      isSuccess = data.success;
      console.log("isSuccess", isSuccess);

      // console.log("data, expected output", data, testCase.expectedOutput);
      // allResults.push(isSuccess);
      setOutput(
        (prevOutput) =>
          prevOutput + `Your output: ${output} ${isSuccess ? "Pass" : "Fail"}\n`
      );
    } catch (error) {
      console.error("Error:", error);
      // allResults.push(false);
      setOutput((prevOutput) => prevOutput + `: Error\n`);
    }

    // setTestResults(allResults);
    // const allTestsPassed = allResults.every((result) => result === true);
    // console.log("allTestsPassed", allTestsPassed, "allResults", allResults);
    if (isSuccess) {
      toast.success("All tests passed! You are a smart 🍄", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        style: { width: "400px" },
      });
    } else {
      // Optionally, handle the case where not all tests pass
      toast.error("Failure is the mother of success! 💪 ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        style: { width: "400px" },
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="container flex flex-col lg:flex-row item-start">
        <div className="editor-container max-w-72 lg:max-w-none">
          <PythonEditor code={code} setCode={setCode} />
        </div>
        <div className="output-container lg:order-2 lg:min-w-[500px] lg:max-w-[500px] lg:max-h-[500px] lg:overflow-y-auto px-2">
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
      <button
        className="bg-gradient-to-r from-purple-500 ml-2 to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-gradient-to-r from-purple-600 to-pink-600 transform hover:scale-105 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50 mb-8"
        onClick={runPythonTestCode}
      >
        Submit
      </button>
    </div>
  );
}
