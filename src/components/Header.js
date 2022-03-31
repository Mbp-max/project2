import React,{useState, useEffect} from 'react';
import Phase from './Phase'
import Feedback from './Feedback';
import FeedbackList from './FeedbackList';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function Header({phases, feedback}){
  const [currentPhase, setCurrentPhase] = useState([])
  const [currentFeedback, setCurrentFeedback] = useState([])
  const [show,setShow]=useState(false)

  
  function homeButton (){
    setShow(false)
  }
  
  console.log(feedback)
  function handlePhase(e){
    const name = e.target.getAttribute("id")
    setShow(true);
    setCurrentPhase(phases.find((phase) => (phase.Phase === name)));
    setCurrentFeedback(feedback.find((feed) => (feed.id == name)))  
  }
  console.log(currentFeedback)
  console.log(currentPhase)
  
return( 
  <>
  <header className="header sticky sticky--top js-header">
    <div className="grid">
      <nav className="navigation">
        <ul className="navigation__list navigation__list--inline">
          <Router>
          <li className="navigation__item"><a href="#" className="navigation__link navigation__link--is-active" onClick={homeButton}>Home</a></li>
          <li className="navigation__item" ><a href="#" className="navigation__link" onClick={handlePhase} id="0">Pre-Work</a></li>
          <li className="navigation__item" ><a href="#" className="navigation__link" onClick={handlePhase} id="1">Phase One</a></li>
          <li className="navigation__item" ><a href="#" className="navigation__link" onClick={handlePhase} id="2">Phase Two</a></li>
          <li className="navigation__item" ><a href="#" className="navigation__link" onClick={handlePhase} id="3">Phase Three</a></li>
          <li className="navigation__item" ><a href="#" className="navigation__link" onClick={handlePhase} id="4">Phase Four</a></li>
          <li className="navigation__item" ><a href="#" className="navigation__link" onClick={handlePhase} id="5">Phase Five</a></li>
          </Router>
        </ul>
      </nav>
    </div>
  </header>
  <main className="main">
    <div className="grid">
      <Phase phase= {currentPhase} name={currentPhase.name} phaseName={currentPhase.Phase} description={currentPhase.description} show={show} videos={currentPhase.videos} currentFeedback={currentFeedback}/>
    </div>
  </main>
</>
)
}
export default Header;