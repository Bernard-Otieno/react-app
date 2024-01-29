import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChuckNorrisJokes = () => {
    
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        setJoke(response.data.value);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Chuck Norris Joke</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{joke}</p>
      )}
    </div>
  );
};

export default ChuckNorrisJokes;
