import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './modules/home/Home';
import About from './modules/about/About';
import FilmRaiting from './modules/filmRaiting/FilmRaiting.jsx';
import Footer from './components/Footer';
import './App.css'; 

function App() {
    return (
      <Router>
        <Suspense fallback={<div>Loading</div>}>
          <div className="main-container">
            <div className="nav-container">
              <nav className="navbar">
                <h1 className="navbar-logo">LOGO</h1>
                <ul className="nav-menu">
                  <li><Link to={'/'} className="nav-links">Home</Link></li>
                  <li><Link to={'/about'} className="nav-links">About</Link></li>
                  <li><Link to={'/filmRaiting'} className="nav-links">FilmRaiting</Link></li>
               </ul>
              </nav>
            </div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/filmRaiting' component={FilmRaiting} />
            </Switch>
            <Footer />
          </div>
        </Suspense>
      </Router>
      );
  }

export default App;
