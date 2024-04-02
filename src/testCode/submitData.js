import React, { useState } from "react";

function SubmitData() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    try {
      const response = await fetch(`${backendUrl}/submit-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age }),
      });
      const data = await response.json();
      setResponse(data.message);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <h1>Submit Data</h1>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {response && <p>{response}</p>}
    </div>
  );
}

export default SubmitData;
