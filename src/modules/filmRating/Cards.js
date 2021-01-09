import React from "react";
import './FilmRaiting.css';


const Cards = (props) => {
  return (
    <div className="notes">
      <div className='notes__cards'>
        <p className="film__name">{props.names}</p>
        <p className="film__rating">{props.ratings}</p>
        <button className='remove__btn' onClick={props.filmId}>X</button>
        <img className="card__image" src={props.images}/>
        <p className="film__year">{props.years}</p>
      </div>
    </div>
  );
}

export default Cards;
