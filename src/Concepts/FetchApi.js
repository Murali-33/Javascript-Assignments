import React, { useEffect, useState } from 'react';

function FetchApi() {
  const [newData, setNewData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setIsLoaded(true);
        setNewData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const containsErrorMessage = () => <div>Error: {error.message}</div>;
  const isLoading = () => <div>Loading...</div>;
  const results = () => (
    <div>
      {newData.map((data) => (
        <h4 key={data.id}>{data.title}</h4>
      ))}
    </div>
  );

  if (error) return containsErrorMessage();
  return !isLoaded ? isLoading() : results();
}

export default FetchApi;
