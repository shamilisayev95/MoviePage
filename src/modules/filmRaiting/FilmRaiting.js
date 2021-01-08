import React, {useMemo} from 'react';
import Cards from './Cards';
import notes from '../../notes';
import * as api from '../../REST';
import './FilmRaiting.css'; 

// api.getRate().then(response => getInfo(response.films))


// function getInfo(item) {
//   const movies = item 
// }

function createCards(cards) {
  return (
    <Cards
    key={cards.id}
    images={cards.imgUrl}
    citys={cards.city}
    countries={cards.country}
    about={cards.description}
  />
  )
}

function FilmRaiting() {
  const movies = useMemo(() => api.getRate(), [])
  console.log(movies);
    return (
        <div>
          <h1 className='header'>
            COUNTRY and CITY
          </h1>
          <div className="dictionary">{notes.map(createCards)}</div>
        </div>
    );
  }

export default FilmRaiting; 