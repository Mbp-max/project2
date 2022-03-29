import './App.css';
import Header from './components/Header';
import Phase from './components/Phase'
import {React, useState, useEffect} from 'react';

function App() {
  const [phases, setPhases] = useState({})

  useEffect(getPhases,[])

  function getPhases(){
    fetch("http://localhost:3000/projects")
    .then(response => response.json())
    .then(data => setPhases(data))
  }
  return (
    <div className="App">
      <Header phases={phases}/>
      
    </div>
  );
}

export default App;