import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/navBar';
import './App.css'; 

function App() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="main-container">
           <NavBar />
            <Footer />
          </div>
        </Suspense>
      </Router>
      );
  }

export default App;
