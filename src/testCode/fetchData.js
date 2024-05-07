import React, { useState, useEffect } from "react";

function FetchAllData() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/comments");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Redis Data</h1>
      {Object.entries(data).length ? (
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ))}
        </ul>
      ) : (
        <p>No data found</p>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default FetchAllData;
