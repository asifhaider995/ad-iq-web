import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TopSection from './sections/TopSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Let's start with AQ-IQ
      </header>
      <Navbar />
      <TopSection content="This is the top section" />
    </div>
  );
}

export default App;
