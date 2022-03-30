import React,{useState, useEffect} from 'react';
import Phase from './Phase'
import Feedback from './feedback';
import FeedbackList from './feedbackList';


function Header({phases}){
  const [currentPhase, setCurrentPhase] = useState([])
  const [show,setShow]=useState(false)
  // function handleChange() {
    //   setShow(!show) 
    //   console.log("s")
    // }

    const [formState, setFormState]= useState([])
    const allFeedback = formState.map(feed =>{return < FeedbackList feed={feed}/>})
    // const {username,content}=allFeedback
    function feedbackData(){
        fetch(`http://localhost:3000/feedback/`)
        .then(res => res.json())
        .then(data => setFormState(data))
        
    }
    useEffect(feedbackData,[])
    
    function handlePhase(e){
      const name = e.target.getAttribute("id")
      setShow(true)
      return setCurrentPhase(phases.find((phase) => (phase.Phase === name))) 
    }
    function homeButton (){
      setShow(false)
    }
    
    return( 
      <>
    <header className="header sticky sticky--top js-header">

  <div className="grid">

  <nav class="navigation">
      <ul class="navigation__list navigation__list--inline">
        <li class="navigation__item"><a href="#" class="navigation__link navigation__link--is-active" onClick={homeButton}>Home</a></li>
        <li class="navigation__item" name="0" ><a href="#" class="navigation__link" onClick={handlePhase} id="0">Pre-Work</a></li>
        <li class="navigation__item" ><a href="#" class="navigation__link" onClick={handlePhase} name="1" id="1">Phase One</a></li>
        <li class="navigation__item" ><a href="#" class="navigation__link" onClick={handlePhase} name="2" id="2">Phase Two</a></li>
        <li class="navigation__item" ><a href="#" class="navigation__link" onClick={handlePhase} name="3" id="3">Phase Three</a></li>
        <li class="navigation__item" ><a href="#" class="navigation__link" onClick={handlePhase} name="4" id="4">Phase Four</a></li>
        <li class="navigation__item" ><a href="#" class="navigation__link" onClick={handlePhase} name="5" id="5">Phase Five</a></li>
      </ul>
    </nav>

  </div>

</header>

<main className="main">

  <div className="grid">
<<<<<<< HEAD
    <Phase phase= {currentPhase} name={currentPhase.name} phaseName={currentPhase.Phase} description={currentPhase.description} show={show} videos={currentPhase.videos}/>
=======
    <Phase phase= {currentPhase} name={currentPhase.name} phaseName={currentPhase.Phase} description={currentPhase.description} show={show}/>
    <Feedback formState={formState} allFeedback={allFeedback}/>
>>>>>>> c3cfda305c4a05d2480a5c8eafb2c294949afd85
  </div>

</main>
</>
)
}
export default Header;