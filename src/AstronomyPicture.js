import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AstronomyPicture = ({ onData }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=7kPVelID02bJhCkC7hZRwjwO6cZPwU73VNxdtnj7');
        setData(response.data);
        onData(response.data); // Pass data to parent
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [onData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="image-container">
      <img src={data.url} alt={data.title} />
    </div>
  );
};

export default AstronomyPicture;
