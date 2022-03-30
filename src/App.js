import './App.css';
import Header from './components/Header';
import Phase from './components/Phase'
import {React, useState, useEffect} from 'react';

function App() {
  const [phases, setPhases] = useState({})
  const [formState, setFormState]= useState([])

  function fetchPhases(){
    fetch("http://localhost:3000/projects")
    .then(response => response.json())
    .then(data => setPhases(data))
  }
  useEffect(fetchPhases,[])
  useEffect(feedbackData, [])
  
  function feedbackData(){
    fetch(`http://localhost:3000/feedback/`)
    .then(res => res.json())
    .then(data => setFormState(data))
    
  }
  
  return (
    <div className="App">
      <Header phases={phases} formState={formState} setFormState={setFormState}/>
    </div>
  );
}

export default App;