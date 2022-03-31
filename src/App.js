import './App.css';
import Header from './components/Header';
import {React, useState, useEffect} from 'react';

function App() {
  const [phases, setPhases] = useState({})
  const [feedback, setFeedback] = useState({})

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
    .then(data => setFeedback(data))
    
  }
  
  return (
    <div className="App">
      <Header phases={phases} feedback={feedback} setFeedback={setFeedback}/>
    </div>
  );
}

export default App;