import React from 'react';
import Cards from './Cards';
import notes from '../notes';

function createCards(cards) {

  // [info, setInfo] = usestate({
  //   posterUrl: '',
  //   nameEn: '',
  //   rating: '',
  // })
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
    return (
        <div>
          <h1>
            <span>COUNTRY and CITY</span>
          </h1>
          <div className="dictionary">{notes.map(createCards)}</div>
        </div>
    );
  }

export default FilmRaiting;