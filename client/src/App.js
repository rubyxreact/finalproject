import React from 'react';
import './App.css';
import MenuComponent from './components/MenuComponent';
import HomeComponent from './components/HomeComponent';
import { Route } from "react-router-dom";
import PostComponent from "./components/PostComponent";
import CreatePostComponent from './components/CreatePostComponent';
import CategoryComponent from './components/CategoryComponent';
import PostByCategoryComponent from './components/PostByCategoryComponent';

function App() {


  return (
    <div className="App">
    <MenuComponent />
     <Route exact path="/app" component={HomeComponent} /> 
     <Route exact path="/app/post/category/:id" component={PostByCategoryComponent} />
     <Route exact path="/app/post" component={PostComponent} />
     <Route path="/app/categories" component={CategoryComponent} />
     <Route exact path="/app/createPost" component={CreatePostComponent} />
  </div>
  );
}

export default App;
