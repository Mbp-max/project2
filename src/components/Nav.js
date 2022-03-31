import React from "react";
import { BrowserRouter as Router,Switch,Route, Link } from "react-router-dom"


function Nav(){
return(
    <header className="header sticky sticky--top js-header">
    <div className="grid">
      <nav className="navigation">
        <ul className="navigation__list navigation__list--inline">
          <Link to='/'>
          <li className="navigation__item"><a href="#" className="navigation__link navigation__link--is-active" >Home</a></li>
          </Link>
          <Link to='/phases'>
          <li className="navigation__item" ><a href="#" className="navigation__link"  id="0">Phases</a></li>
          </Link>
          <Link>
          <li className="navigation__item" ><a href="#" className="navigation__link"  id="1">About Us</a></li>
          </Link>
        </ul>
      </nav>
    </div>
    </header>
)
}
export default Nav;