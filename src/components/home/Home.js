import React from 'react';
import "./home.css";

function Home() {
    return (
        <div className={"root__container-home"}>
          <div className={"wrapper"}>
            <input type="radio" name="point" id="slide1" defaultChecked />
            <input type="radio" name="point" id="slide2" />
            <input type="radio" name="point" id="slide3" />
            <div className={"slider"}>
              <div className={"slides slide1"}></div>
              <div className={"slides slide2"}></div>
              <div className={"slides slide3"}></div>
            </div>
            <div className={"controls"}>
              <label htmlFor="slide1"></label>
              <label htmlFor="slide2"></label>
              <label htmlFor="slide3"></label>
            </div>
          </div>
        </div>
      );
  }

export default Home;
