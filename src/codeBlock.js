import { useState, useRef } from "react";
import { usePython } from "react-py";
import SyntaxHighlightComponent from "./syntaxHighlight";

export default function Codeblock() {
  const textareaRef = useRef(null);
  const [input, setInput] = useState(`
  const fib = (n) => {
    if (n <= 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  };`);

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
    marginRight: "10px",
  };

  return (
    <>
      {/* {isLoading ? <p>Loading...</p> : <p>Ready!</p>} */}
      <div className="flex flex-row">
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => textareaRef.current?.focus()}
          onClick={() => textareaRef.current?.focus()}
          className="relative flex bg-[#282a36] w-full" // Ensure this div is relatively positioned and takes full width
        >
          <form className="w-full" style={{ position: "relative" }}>
            {" "}
            {/* Ensure form takes full width and is relatively positioned */}
            <textarea
              ref={textareaRef} // Ensure you have set the ref to use it
              className="absolute top-0 left-0 w-full h-full bg-transparent p-2 font-mono text-transparent caret-white outline-none"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your code here"
              style={{ zIndex: 2 }} // Higher zIndex ensures textarea is focusable and on top
            />
            <div className="absolute top-0 left-0 w-full h-full">
              {" "}
              {/* This ensures it covers the same area as the textarea */}
              <SyntaxHighlightComponent
                codeString={input}
                customStyle={{
                  width: "100%", // Match parent width
                  height: "100%", // Match parent height
                  background: "transparent",
                }}
              />
            </div>
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
              {isLoading ? "Loading..." : !isRunning ? "Run" : "Running..."}
            </button>
          </form>
        </div>

        <div>
          <p>Output</p>
          <div className="flex flex-wrap max-w-[300px] max-h-[200px] overflow-y-auto">
            <pre className="whitespace-pre-wrap break-words">
              <code>{stdout}</code>
            </pre>
          </div>
          <pre>
            <code>{stderr}</code>
          </pre>
        </div>
      </div>
    </>
  );
}
