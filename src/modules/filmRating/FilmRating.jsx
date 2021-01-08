import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import notes from '../../notes';
import * as api from '../../REST';
import './FilmRaiting.css';

const FilmRating = () => {
    const [movies, setMovies] = useState([]);

    useEffect(async () => { //
        const films = api.getRate(); //componentDidMount - когда срендерился(отрисовался) компонент
        setMovies(await films);

        return () => { //componentWillUnmount - когда кмопонент удалился из вёрстки
            setMovies([]);
        };
    }, []);

    return (
        <div data-at={'wrapper'}>
            <div>
              <h1 className='header'>
                COUNTRY and CITY
              </h1>
            </div>
            <div className="dictionary">
                {
                    movies.length ?
                        movies.map((move, index) =>
                            <Cards
                                key={index}
                                citys={move.nameEn}
                                about={move.year}
                                images={move.posterUrl}
                                countries={move.rating}
                            />
                        )
                    : null
                }
            </div>
        </div>
    )
  }

export default React.memo(FilmRating);
