import React from 'react';
import './App.css';
import PostComponent from './components/PostComponent';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1 className="App-title">Blog!</h1>
    </header>
    <PostComponent />
  </div>
  );
}

export default App;
