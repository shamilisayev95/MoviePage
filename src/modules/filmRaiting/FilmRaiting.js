import React from 'react';
import notes from '../../notes';
import './FilmRaiting.css'; 

const FilmRaiting = () => {
  const [list, setList] = React.useState(notes);
 
  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);
 
    setList(newList);
  }
 
  return <List list={list} onRemove={handleRemove} />;
};
 
const List = ({ list, onRemove }) => (
  <ul className='notes'>
    {list.map((item) => (
      <Item key={item.id} item={item} onRemove={onRemove} />
    ))}
  </ul>
);
 
const Item = ({ item, onRemove }) => (
  <li className='notes__cards'>
    <p className='card__city'>{item.city}</p>
    <p className='card__countries'>{item.country}</p>
    <button className='remove__btn' type="button" onClick={() => onRemove(item.id)}>X</button>
    <img src={item.imgUrl} className='card__image' />
    <p className='card__about'>{item.description}</p>
  </li>
);

  export default FilmRaiting;

  