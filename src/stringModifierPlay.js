import React, { useState, useEffect } from "react";

const StringModifierPlay = () => {
  const [replacementCharacters, setReplacementCharacters] = useState("");
  const [replacementCharacters2, setReplacementCharacters2] = useState("");
  const [modifiedString, setModifiedString] = useState("");
  const originalString = "ZabdZabac";

  // Effect to update modifiedString when replacementCharacters changes
  useEffect(() => {
    const computeModifiedString = () => {
      if (!replacementCharacters) {
        return originalString;
      }
      return originalString.replace(
        new RegExp(`${replacementCharacters}`, "g"),
        "Y"
      );
    };
    setModifiedString(computeModifiedString());
  }, [replacementCharacters]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setReplacementCharacters(value);
  };
  const handleInputChange2 = (event) => {
    const { value } = event.target;
    setReplacementCharacters2(value);
    console.log("setReplacementCharacters2", value);
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
            placeholder="aa"
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
            placeholder="aa"
            value={replacementCharacters2}
            onChange={handleInputChange2}
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

// import React, { useState, useEffect } from "react";

// const StringModifierPlay = () => {
//   const originalString = "ZabdZabac";
//   // State to store the replacement characters
//   const [replacementCharacters, setReplacementCharacters] = useState("");
//   const [modifiedString, setModifiedString] = useState(originalString);
//   const [modifiedString2, setModifiedString2] = useState("");

//   useEffect(() => {
//     // Update modifiedString2 whenever modifiedString changes
//     // setModifiedString2(modifiedString);
//     console.log("modified string", modifiedString);
//   }, [modifiedString]);
//   // Original string

//   // Function to handle replacement characters input change
//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     setReplacementCharacters(value);
//     computeModifiedString();
//   };

//   // Function to compute modified string
//   // Function to compute modified string
//   const computeModifiedString = () => {
//     if (!replacementCharacters) {
//       return originalString;
//     }
//     const modifiedString = originalString.replace(
//       new RegExp(`${replacementCharacters}`, "g"),
//       "Y"
//     );
//     setModifiedString(modifiedString);
//     // return modifiedString;
//   };
//   // Function to compute the length of the original string
//   const computeOriginalStringLength = () => {
//     return originalString.length;
//   };

//   // Function to compute the length of the modified string
//   const computeModifiedStringLength = () => {
//     return modifiedString.length;
//   };
//   return (
//     <div className="flex">
//       <div className="w-1/3 p-2">
//         <p>
//           <div className="flex items-center">
//             <label htmlFor="replacementInput1">Y=</label>
//             <input
//               id="replacementInput1"
//               type="text"
//               placeholder="💡"
//               value={replacementCharacters}
//               onChange={handleInputChange}
//               className="w-20 p-1 border rounded"
//             />
//           </div>
//         </p>
//         <p>
//           <div className="flex items-center">
//             <label htmlFor="replacementInput2">X=</label>
//             <input
//               id="replacementInput2"
//               type="text"
//               placeholder="💡"
//               value={replacementCharacters}
//               onChange={handleInputChange}
//               className="w-20 p-1 border rounded"
//             />
//           </div>
//         </p>
//       </div>
//       <div className="w-1/3 p-2">
//         <p>
//           <label>Modified String:</label> {modifiedString}
//         </p>
//       </div>
//       <div className="w-1/3 p-2">
//         <p>
//           <label>String Length:</label> {computeModifiedStringLength()}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default StringModifierPlay;
