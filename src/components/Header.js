import React,{useState, useEffect} from 'react';
import Phase from './Phase'


function Header({phases}){
  const [currentPhase, setCurrentPhase] = useState([])
  const [show,setShow]=useState(false)

  // function handleChange() {
  //   setShow(!show) 
  //   console.log("s")
  // }
  
  function handlePhase(e){
    const name = e.target.getAttribute("id")
    setShow(true)
    return setCurrentPhase(phases.find((phase) => (phase.Phase === name))) 
  }
  function homeButton (){
    setShow(false)
  }
  console.log(currentPhase)

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
    <Phase phase= {currentPhase} name={currentPhase.name} phaseName={currentPhase.Phase} description={currentPhase.description} show={show}/>
  </div>

</main>
</>)
}
export default Header;