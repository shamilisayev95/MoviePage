import React from 'react';
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import './App.css';


const App = () => {
  return (
      <div className="main-container">
       <Navbar />
        <Footer />
      </div>
  );
};

export default App;
