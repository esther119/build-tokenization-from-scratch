import React, { useState } from "react";

const StringModifier = () => {
  // State to store the replacement characters
  const [replacementCharacters, setReplacementCharacters] = useState("");
  // Original string
  const originalString = "aaabdaaabac";

  // Function to handle replacement characters input change
  const handleInputChange = (event) => {
    const { value } = event.target;
    setReplacementCharacters(value);
  };

  // Function to compute modified string
  // Function to compute modified string
  const computeModifiedString = () => {
    if (!replacementCharacters) {
      return originalString;
    }
    const modifiedString = originalString.replace(
      new RegExp(`${replacementCharacters}`, "g"),
      "Z"
    );
    return modifiedString;
  };
  // Function to compute the length of the original string
  const computeOriginalStringLength = () => {
    return originalString.length;
  };

  // Function to compute the length of the modified string
  const computeModifiedStringLength = () => {
    return computeModifiedString().length;
  };
  return (
    <div className="flex">
      <div className="w-full p-2">
        <div className="flex">
          <div className="w-1/3"></div>
          <div className="w-1/3">
            <p>
              <label>Original String:</label> {originalString}
            </p>
          </div>
          <div className="w-1/3">
            <p>
              <label>String Length:</label> {computeOriginalStringLength()}
            </p>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-1/3 p-2">
            <p>
              <div className="flex items-center">
                <label htmlFor="replacementInput">Z=</label>
                <input
                  id="replacementInput"
                  type="text"
                  placeholder="aa"
                  value={replacementCharacters}
                  onChange={handleInputChange}
                  className="w-14 sm:w-28 p-1 border rounded"
                />
              </div>
            </p>
          </div>
          <div className="w-1/3 p-2">
            <p>
              <label>Modified String:</label> {computeModifiedString()}
            </p>
          </div>
          <div className="w-1/3 p-2">
            <p>
              <label>String Length:</label> {computeModifiedStringLength()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringModifier;
