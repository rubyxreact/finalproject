import React from 'react';
import './App.css';
import PostComponent from './components/PostComponent';

function App() {
  return (
    <div className="App">
   <header>
     <div className="logo">
     ruby<span>x</span>react
     </div>
     <div className="menu">
      <a href="/">Home</a>
      <a href="/">Articles</a>
      <a href="/">Mon compte</a>
      <a href="/">Déconnexion</a>
     </div>
   </header>
    <PostComponent />
  </div>
  );
}

export default App;
