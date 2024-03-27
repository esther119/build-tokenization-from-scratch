import { useState } from "react";
import { usePython } from "react-py";

export default function Codeblock() {
  const [input, setInput] = useState("");

  // Use the usePython hook to run code and access both stdout and stderr
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython();
  // Style object for the textarea to mimic a code editor
  const codePadStyle = {
    fontFamily: "monospace", // Keeps the font monospace
    backgroundColor: "#333", // Dark background
    color: "white", // White text color
    borderColor: "#444", // Slightly lighter border color for some contrast
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px", // Slightly rounded corners
    padding: "10px", // Padding inside the textarea
    width: "400px", // Adjusted width
    height: "250px", // Adjusted height
    lineHeight: "1.5", // Increase line height for readability
    tabSize: "4", // Set the tab size to 4 spaces for better code formatting
    outline: "none", // Removes the outline to make it more embedded
  };

  return (
    <>
      {isLoading ? <p>Loading...</p> : <p>Ready!</p>}
      <div className="flex flex-row">
        <div>
          <form>
            <textarea
              style={codePadStyle}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your code here"
            />
            <button
              type="submit"
              disabled={isLoading || isRunning}
              onClick={(e) => {
                e.preventDefault();
                runPython(input);
              }}
              className={`mt-4 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-150
                          ${
                            !isRunning && !isLoading
                              ? "bg-blue-500 hover:bg-blue-700"
                              : "bg-gray-500 cursor-not-allowed"
                          }`}
            >
              {!isRunning ? "Run" : "Running..."}
            </button>
          </form>
        </div>
        <div>
          <p>Output</p>
          <pre>
            <code>{stdout}</code>
          </pre>
          <pre>
            <code>{stderr}</code>
          </pre>
        </div>
      </div>
    </>
  );
}
