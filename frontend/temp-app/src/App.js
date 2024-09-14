import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log('test')
      let response = await fetch('http://127.0.0.1:5000/api/listall');
      let jsonData = await response.json();
      console.log('list all response: ', JSON.stringify(jsonData));

      response = await fetch('http://127.0.0.1:5000/api/search?query=Jesse');
      jsonData = await response.json();
      console.log('search response: ', JSON.stringify(jsonData));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Check the console for API response</p>
      </header>
    </div>
  );
}

export default App;