import './App.css';
import { BrowserRouter as Router,Switch,Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Phases from './components/Phases';
import {useState, useEffect} from 'react';
import Home from './components/Home';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/phases" component={Phases}/> 
      <Route path="/" exact component={Home}/>
    </div>
    </Router>
  );
}

export default App;
