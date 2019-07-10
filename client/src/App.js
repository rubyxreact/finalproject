import React from 'react';
import './App.css';
import MenuComponent from './components/MenuComponent';
import HomeComponent from './components/HomeComponent';
import { Route } from "react-router-dom";
import PostComponent from "./components/PostComponent";
import CreatePostComponent from './components/CreatePostComponent';

function App() {


  return (
    <div className="App">
    <MenuComponent />
     <Route exact path="/" component={HomeComponent} /> 
     <Route path="/post" component={PostComponent} />
     <Route exact path="/createPost" component={CreatePostComponent} />
  </div>
  );
}

export default App;
