import React from "react";
import Home from '../home/Home';
import About from '../about/About';
import FilmRating from '../filmRating/FilmRating';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navbar = props => {
  console.log(props.text);
  return (
    <>
    <Router>
      <div className="main-container">
        <div className="nav-container">
          <nav className="navbar">
            <img className="navbar-logo" src='https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Movie-Studio-icon.png'/>
            <ul className="nav-menu">
              <li><Link to={'/'} className="nav-links">Home</Link></li>
              <li><Link to={'/about'} className="nav-links">About</Link></li>
              <li><Link to={'/filmRating'} className="nav-links">FilmRating</Link></li>
           </ul>
          </nav>
        </div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/filmRating' component={FilmRating} />
        </Switch>
      </div>
  </Router>

  <header className="App-header">
      <h2>{props.text}</h2>
    </header>
    </>
)
};

export default Navbar;
