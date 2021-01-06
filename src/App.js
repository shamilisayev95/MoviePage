import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import FilmRaiting from './components/FilmRaiting';
import Footer from './components/Footer';
import './App.css'; 

function App() {
    return (
    <Router>
      <div className="main-container">
        <div className="nav-container">
          <nav className="navbar">
            <h1 className="navbar-logo">LOGO</h1>
            <ul class="nav-menu">
                <li><Link to={'/'} className="nav-links">Home</Link></li>
                <li><Link to={'/filmRaiting'} className="nav-links">About</Link></li>
                <li><Link to={'/about'} className="nav-links">FilmRaiting</Link></li>
            </ul>
          </nav>
        </div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/filmRaiting' component={About} />
              <Route path='/about' component={FilmRaiting} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

export default App;