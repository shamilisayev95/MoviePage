import './FilmRaiting.css';
import Cards from "../cards/Cards";
import {getRate} from '../../REST';
import constants from '../../constants/constants';
import React, { useReducer, useEffect } from "react";
import { initialState, reducer } from "../../reducer/reducer";


const FilmRating = () => { 
const [state, dispatch] = useReducer(reducer, initialState);

  
useEffect(() => {
  getRate().then(res => {
    dispatch({
      type: constants.SAVE_CARDS,
      payload: res.films
    });
  });
}, []);


const { movies } = state;


const handleRemove = (filmId) => {
  dispatch({
    type: constants.REMOVE_CARD,
    payload: filmId
  })
}

return(
  <>
    <h1 className='header'>
      TOP MOVIES
    </h1>
    <div className="cards__container">
      <div className="movies">{
        movies.length ?
        movies.map((movie, index) => (
        <Cards key={`${index}-${movie.Title}`} movie={movie} onRemove={handleRemove} />
      ))
      : null
      }</div>
    </div>
  </>
)
}

export default FilmRating;