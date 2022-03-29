import React from 'react';
import Phase from './Phase'


function Header({handleClick, phases}){
    console.log(phases)
    const renderPhases = () => {
        phases.map(phase => <Phase id={phase.id} phase={phase.phase} name={phase.name} description={phase.description} video={phase.video} feedback={phase.feedback}/>)
    }
    return( <>
    <header class="header sticky sticky--top js-header">

  <div class="grid">

    <nav class="navigation">
      <ul class="navigation__list navigation__list--inline">
        <li class="navigation__item"><a href="#" class="navigation__link navigation__link--is-active">Home</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link" >Phase 0</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link">Phase 1</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link">Phase 2</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link">Phase 3</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link">Phase 4</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link">Phase 5</a></li>
      </ul>
    </nav>

  </div>

</header>

<main class="main">

  <div class="grid">
  {renderPhases}  
  </div>

</main>
</>)
}
export default Header;