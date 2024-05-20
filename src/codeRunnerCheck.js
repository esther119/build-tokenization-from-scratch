// import React, { useState } from "react";
// import PythonEditor from "./pythonEditor";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { showToast } from "./showToast";

// export default function CodeRunnerCheck({ initialCode }) {
//   const [code, setCode] = useState(initialCode || 'print("Hello, World!")');
//   const [output, setOutput] = useState("");
//   const backendUrl = "http://127.0.0.1:5000";

//   const runPythonCode = () => {
//     fetch(`${backendUrl}/run_code`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ code }),
//     })
//       .then((response) => response.text())
//       .then((data) => {
//         setOutput(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         toast.error("Failed to run the code!", {
//           position: "top-center",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           style: { width: "400px" },
//         });
//       });
//   };

//   const runPythonTestCode = async () => {
//     try {
//       const response = await fetch(`${backendUrl}/run_code_check`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ code }),
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }

//       const data = await response.json();
//       const output = data.result;
//       const isSuccess = data.success;

//       setOutput(
//         (prevOutput) =>
//           prevOutput + `Your output: ${output} ${isSuccess ? "Pass" : "Fail"}\n`
//       );

//       showToast(
//         isSuccess
//           ? "All tests passed! You are a smart 🍄"
//           : "Failure is the mother of success! 💪",
//         isSuccess ? "success" : "error"
//       );
//     } catch (error) {
//       console.error("Error:", error);
//       setOutput((prevOutput) => prevOutput + `: Error\n`);
//       showToast("An error occurred while testing the code!", "error");
//     }
//   };
//   return (
//     <div>
//       <ToastContainer />
//       <div className="container flex flex-col lg:flex-row items-start">
//         <div className="editor-container max-w-72 lg:max-w-none">
//           <PythonEditor code={code} setCode={setCode} />
//         </div>
//         <div className="output-container lg:order-2 lg:min-w-[500px] lg:max-w-[500px] lg:max-h-[500px] lg:overflow-y-auto px-2">
//           <div className="output border border-gray-300 p-4">
//             <h2>Output</h2>
//             <pre className="whitespace-pre-wrap break-words">{output}</pre>
//           </div>
//         </div>
//       </div>
//       <button
//         className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-gradient-to-r from-purple-600 to-pink-600 transform hover:scale-105 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50 mb-8"
//         onClick={runPythonCode}
//       >
//         Run Code
//       </button>
//       <button
//         className="bg-gradient-to-r from-purple-500 ml-2 to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-gradient-to-r from-purple-600 to-pink-600 transform hover:scale-105 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50 mb-8"
//         onClick={runPythonTestCode}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

import React, { useState } from "react";
import PythonEditor from "./pythonEditor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CodeRunnerCheck({ initialCode }) {
  const [code, setCode] = useState(initialCode || 'print("Hello, World!")');
  const [output, setOutput] = useState("");
  // const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const backendUrl = "http://127.0.0.1:5000";
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
    // let allResults = [];
    let isSuccess = "";
    try {
      const response = await fetch(`${backendUrl}/run_code_check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }), // Sending code with input
      });
      const data = await response.json();
      console.log("data", typeof data, data);

      const output = data.result;
      isSuccess = data.success;
      console.log("isSuccess", isSuccess);
      setOutput(
        (prevOutput) =>
          prevOutput + `Your output: ${output} ${isSuccess ? "Pass" : "Fail"}\n`
      );
    } catch (error) {
      console.error("Error:", error);
      // allResults.push(false);
      setOutput((prevOutput) => prevOutput + `: Error\n`);
    }

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
      <ToastContainer />
    </div>
  );
}
