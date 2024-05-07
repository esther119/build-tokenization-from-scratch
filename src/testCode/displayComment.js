import React, { useState, useEffect } from "react";

const DisplayComment = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/refresh-data");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data initially when component mounts
    fetchData();

    // Fetch data every three hours
    const intervalId = setInterval(fetchData, 3 * 60 * 60 * 1000);

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {Array.isArray(data) ? (
          data.map((comment, index) => <li key={index}>{comment}</li>)
        ) : (
          <li>No comments available</li>
        )}
      </ul>
    </div>
  );
};

export default DisplayComment;

// import React, { useState, useEffect } from "react";

// const DisplayComment = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/refresh-data");
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     // Fetch data initially when component mounts
//     fetchData();

//     // Fetch data every three hours
//     const intervalId = setInterval(fetchData, 3 * 60 * 60 * 1000);

//     // Cleanup function to clear interval
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       <h1>Comments</h1>
//       <ul>
//         {data && data.map((comment, index) => <li key={index}>{comment}</li>)}
//       </ul>
//     </div>
//   );
// };

// export default DisplayComment;
