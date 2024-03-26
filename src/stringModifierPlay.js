import React, { useState, useEffect } from "react";

const StringModifierPlay = () => {
  const originalString = "ZabdZabac";
  const [replacementCharacters, setReplacementCharacters] = useState("");
  const [replacementCharacters2, setReplacementCharacters2] = useState("");
  const [modifiedString, setModifiedString] = useState("");

  useEffect(() => {
    // Compute the modified string by first applying replacementCharacters
    // and then replacementCharacters2 in sequence.
    let newModifiedString = originalString;

    if (replacementCharacters) {
      newModifiedString = newModifiedString.replace(
        new RegExp(`${replacementCharacters}`, "g"),
        "Y"
      );
    }

    if (replacementCharacters2) {
      newModifiedString = newModifiedString.replace(
        new RegExp(`${replacementCharacters2}`, "g"),
        "X"
      );
    }

    setModifiedString(newModifiedString);
  }, [replacementCharacters, replacementCharacters2]);
  // Effect to update modifiedString when replacementCharacters changes
  //   useEffect(() => {
  //     const computeModifiedStringY = () => {
  //       if (!replacementCharacters) {
  //         return originalString;
  //       }
  //       return originalString.replace(
  //         new RegExp(`${replacementCharacters}`, "g"),
  //         "Y"
  //       );
  //     };
  //     const computeModifiedStringX = () => {
  //       console.log(
  //         "replace replacementCharacters2 with",
  //         replacementCharacters2
  //       );
  //       if (!replacementCharacters2 & !modifiedString) {
  //         return originalString;
  //       } else if (!replacementCharacters2 & modifiedString) {
  //         return modifiedString;
  //       }
  //       return modifiedString.replace(
  //         new RegExp(`${replacementCharacters2}`, "g"),
  //         "X"
  //       );
  // //     };
  //     setModifiedString(computeModifiedStringY());
  //     // setModifiedString(computeModifiedStringX());
  //   }, [replacementCharacters, replacementCharacters2]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setReplacementCharacters(value);
  };
  const handleInputChange2 = (event) => {
    const { value } = event.target;
    setReplacementCharacters2(value);
    // console.log("setReplacementCharacters2", value);
  };
  const computeModifiedStringLength = () => modifiedString.length;

  return (
    <div className="flex mt-2">
      <div className="w-1/3 p-2">
        <div className="flex items-center">
          <label htmlFor="replacementInput">Y=</label>
          <input
            id="replacementInput"
            type="text"
            value={replacementCharacters}
            onChange={handleInputChange}
            className="w-20 p-1 border rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="replacementInput">X=</label>
          <input
            id="replacementInput"
            type="text"
            value={replacementCharacters2}
            onChange={handleInputChange2}
            placeholder="case sensitive"
            className="w-20 p-1 border rounded"
          />
        </div>
      </div>

      <div className="w-1/3 p-2">
        <p>
          <label>Modified String:</label> {modifiedString}
        </p>
      </div>
      <div className="w-1/3 p-2">
        <p>
          <label>String Length:</label> {computeModifiedStringLength()}
        </p>
      </div>
    </div>
  );
};

export default StringModifierPlay;
