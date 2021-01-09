import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import * as api from '../../REST';
import './FilmRaiting.css';

const FilmRating = (props) => {

    // const {
    //     saveCardsData,
    //     saveCard,
    // } = props;

    const [movies, setMovies] = useState([]);

    useEffect(async () => { //
        const films = api.getRate(); //componentDidMount - когда срендерился(отрисовался) компонент
        setMovies(await films);

        return () => { //componentWillUnmount - когда кмопонент удалился из вёрстки
            setMovies([]);
        };
    }, []);

    console.log(movies);

    return (
        <div data-at={'wrapper'}>
              <h1 className='header'>
                TOP MOVIES
              </h1>
            <div className="cards__container">
                {
                    movies.length ?
                        movies.map((move, index) =>
                            <Cards
                                key={index}
                                names={move.nameEn}
                                years={move.year}
                                images={move.posterUrl}
                                ratings={move.rating}
                                removeBtn={move.filmId}
                            />
                        )
                    : null
                }
            </div>
        </div>
    )
  }

export default React.memo(FilmRating);
