import React, { useState } from "react";

function FormInput() {
  const [name, setName] = useState("");
  const [idea, setIdea] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleIdeaChange = (event) => {
    setIdea(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit behavior

    // Creating an object to send as the body of the POST request
    const data = {
      key: name,
      value: idea,
    };

    // Fetch API to send data to the server
    try {
      const fetchDataResponse = await fetch("http://localhost:3000/comments");
      const fetchedData = await fetchDataResponse.json(); // assuming the server responds with JSON
      console.log("Old output from server:", fetchedData);

      const response = await fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.text(); // or response.json() if server responds with JSON
      console.log(result); // Logging the response from the server
      alert("Data sent to Redis"); // Alert the user on successful save
    } catch (error) {
      console.error("Failed to save data", error);
      alert("Failed to save data"); // Alert the user on failure
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
      </label>
      <br />
      <label>
        Idea:
        <input
          type="text"
          value={idea}
          onChange={handleIdeaChange}
          placeholder="Enter your idea"
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormInput;

// import React, { useState } from "react";

// function TextInput() {
//   const [name, setName] = useState(""); // State for the name input
//   const [idea, setIdea] = useState(""); // State for the idea input

//   const handleNameChange = (event) => {
//     setName(event.target.value); // Updates name state with the current input value
//   };

//   const handleIdeaChange = (event) => {
//     setIdea(event.target.value); // Updates idea state with the current input value
//   };

//   return (
//     <div>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={handleNameChange} // Handle changes for name input
//           placeholder="Enter your name"
//         />
//       </label>
//       <br />
//       <label>
//         Idea:
//         <input
//           type="text"
//           value={idea}
//           onChange={handleIdeaChange} // Handle changes for idea input
//           placeholder="Enter your idea"
//         />
//       </label>
//       <p>Name: {name}</p>
//       <p>Idea: {idea}</p>
//     </div>
//   );
// }

// export default TextInput;
