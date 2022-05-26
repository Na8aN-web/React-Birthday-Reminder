import React from 'react';

function List(props){
     
  return (
    <>
      {props.details.map((detail) =>{
        return <article key={detail.id} className="person">
          <img src={detail.image} alt={detail.name} />
          <div>
            <h4>{detail.name}</h4>
            <p>{detail.age}</p>
          </div>
        </article>
      })}
    </>
   
  );
};

export default List;

