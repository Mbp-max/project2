import {useState, useEffect} from 'react';
import CurrentPhase from './CurrentPhase';

function Phases(){
const [currentPhase, setCurrentPhase] = useState({videos: [], name: "☝CLICK THE PHASE BUTTONS ABOVE☝"})
// const [currentPhase, setCurrentPhase] = useState(null)
const [currentFeedback, setCurrentFeedback] = useState(null)
const [phases, setPhases] = useState({})
const [feedback, setFeedback] = useState([])
const [refetchFeedback, setRefetchFeedback] = useState(true)

function fetchPhases(){
  fetch("http://localhost:3000/projects")
  .then(response => response.json())
  .then(data => setPhases(data))
}
useEffect(fetchPhases, [])
useEffect(feedbackData, [refetchFeedback])

function feedbackData(){
  fetch('http://localhost:3000/feedback/')
  .then(res => res.json())
  .then(data => setFeedback(data))
  
}
function handlePhase(e){
  const name = e.target.getAttribute("id")
  setCurrentPhase(phases.find((phase) => (phase.Phase == name)));
  setCurrentFeedback(feedback.filter((feed) => (feed.phase == name)))  
}

// const currentFeedback = feedback.filter((feed) => (feed.phase == currentPhase.name))`
console.log(feedback)
console.log(phases)
console.log(currentFeedback)
console.log(currentPhase)
return( 
  <>
  <header className="header sticky sticky--top js-header">
    <div className="grid">
      <nav className="second-nav">
        <ul className="navigation__list navigation__list--inline">
          
          <li className="second-header" ><a href="#" className="second-header" id="0" onClick={handlePhase}>Pre-Work</a></li>
          <li className="second-header" ><a href="#" className="second-header" id="1" onClick={handlePhase}>Phase One</a></li>
          <li className="second-header" ><a href="#" className="second-header" id="2" onClick={handlePhase}>Phase Two</a></li>
          <li className="second-header" ><a href="#" className="second-header" id="3" onClick={handlePhase}>Phase Three</a></li>
          <li className="second-header" ><a href="#" className="second-header" id="4" onClick={handlePhase}>Phase Four</a></li>
          <li className="second-header" ><a href="#" className="second-header" id="5" onClick={handlePhase}>Phase Five</a></li>
          
        </ul>
      </nav>
    </div> 
  </header>
  <main className="main">
    <div className="grid">
      {currentFeedback && <CurrentPhase setCurrentFeedback={setCurrentFeedback} phase={currentPhase} name={currentPhase.name} phaseName={currentPhase.Phase} description={currentPhase.description} videos={currentPhase.videos} currentFeedback={currentFeedback} setRefetchFeedback={setRefetchFeedback} refetchFeedback={refetchFeedback}/>}
    </div>
  </main>
</>
  )
}
export default Phases;