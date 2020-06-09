import React from 'react';

import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <img src={`https://via.placeholder.com/180/003366`} width="150" height="150" alt={props.card.name} />
    <h2> {props.card.name} </h2>
    <p> {props.card.company.name} </p>
    <p> {props.card.phone} </p>
    <p> {props.card.email} </p>
  </div>
)