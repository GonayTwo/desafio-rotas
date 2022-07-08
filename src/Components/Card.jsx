import React from 'react';
import './Card.css';
const Card = ({ dados, foto }) => {
  return (
    <div className='containerCards__card'>
      <img className='containerCards__img' src={foto.src} alt='' />
      <h1>{dados.nome}</h1>
    </div>
  );
};

export default Card;
