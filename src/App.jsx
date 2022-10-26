import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Background from './components/Background';
import RoutesAnimation from './components/RoutesAnimation';

function App() {
  const [rotationSpeed, setRotationSpeed] = useState(2);

  return (
    <div className="App">
      <Background rotationSpeed={rotationSpeed} />
      <BrowserRouter>
        <RoutesAnimation setRotationSpeed={setRotationSpeed} />
      </BrowserRouter>
    </div>
  );
}

export default App;
