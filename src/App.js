import './App.css';
import { BrowserRouter as Router,Switch,Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Phases from './components/Phases';
import {useState, useEffect} from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/phases" component={Phases}/> 
      <Route path="/" exact component={Home}/>
      <Route path="/AboutUs" exact component={AboutUs}/>
    </div>
    </Router>
  );
}

export default App;
