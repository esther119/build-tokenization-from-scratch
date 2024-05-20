import React, { useState } from "react";

function Calculation() {
  // Define state variables to store input values and result
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");

  // Define a function to handle changes in the first input
  const handleChange1 = (event) => {
    setValue1(event.target.value);
    calculateResult(event.target.value, value2);
  };

  // Define a function to handle changes in the second input
  const handleChange2 = (event) => {
    setValue2(event.target.value);
    calculateResult(value1, event.target.value);
  };

  // Define a function to perform the calculation
  const calculateResult = (val1, val2) => {
    const result = parseInt(val1 || 0) * 4 + 1;
    setResult(result);
  };

  return (
    <div className="flex justify-center mt-8">
      <span className="bg-yellow-500 rounded-lg">4</span>*{" "}
      <input
        type="number"
        value={value1}
        onChange={handleChange1}
        className="bg-blue-300 rounded-lg px-2 py-1 w-14"
      />
      <sup>1</sup> + <span className="bg-green-500 rounded-lg">1</span>*{" "}
      <input
        type="number"
        value={value2}
        onChange={handleChange2}
        className="bg-blue-300 rounded-lg px-2 py-1 w-14"
      />
      <sup>0</sup> = {result}, and ASCII({result}) ={" "}
      {String.fromCharCode(result)}
    </div>
  );
}

export default Calculation;
