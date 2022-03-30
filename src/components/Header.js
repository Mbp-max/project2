import React,{useState,useEffect} from 'react';
import Phase from './Phase'


function Header(props){
  // useEffect(setPhases(props.phases),[])
  const data = Array.from(props.phases)
 
  const phasesList = data.map((phase,key) => <Phase phase={phase} key={key}/>)



  
  return( 
    <>
    <header className="header sticky sticky--top js-header">

  <div className="grid">

    <nav className="navigation">
      <ul className="navigation__list navigation__list--inline">
        {phasesList}
      </ul>
    </nav>

  </div>

</header>

<main className="main">

  <div className="grid">
  </div>

</main>
</>)
}
export default Header;