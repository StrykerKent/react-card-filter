import React from 'react';

import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <h2> {props.card.name} </h2>
  </div>
)