import React, { useState, useEffect } from "react";

const Data = () => {
  // State to store the fetched data
  const [data, setData] = useState([]);
  // State to handle loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your backend API
        const response = await fetch("http://localhost:8080/the");
        
        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        // Parse the response as JSON
        const result = await response.json();
        
        // Assuming the data is within "_embedded.the" in the response
        setData(result._embedded.the || []); // Adjust based on your response format
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Render loading, error, or data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Aliens List</h1>
      <ul>
        {data.map((alian) => (
          <li key={alian.id}>
            {alian.name} (ID: {alian.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
