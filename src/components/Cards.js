import React from "react";

function Cards(props) {
  return (
    <div className="notes">
      <img src={props.images}/>
      <p>{props.citys}</p>
      <p>{props.countries}</p>
      <p>{props.about}</p>
    </div>
  );
}

export default Cards;



