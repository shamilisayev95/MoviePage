import React from "react";

const Cards = ({ movie }) => {
  return (
    <div className="notes">
      <div className='notes__cards'>
        <p className="film__name">{movie.nameEn}}</p>
        <p className="film__rating">{movie.rating}</p>
        <button className='remove__btn'>X</button>
        <img className="card__image" src={movie.posterUrl}/>
        <p className="film__year">{movie.year}</p>
      </div>
    </div>
  );
}

export default Cards;

