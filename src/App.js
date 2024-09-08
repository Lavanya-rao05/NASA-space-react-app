// src/App.js
import React, { useState } from 'react';
import AstronomyPicture from './AstronomyPicture';
import Sidebar from './sidebar';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="app-container">
      <div className="image-container">
        <AstronomyPicture onData={setData} />
      </div>
      {data && (
        <Sidebar
          title={data.title}
          description={data.explanation}
        />
      )}
    </div>
  );
}

export default App;
