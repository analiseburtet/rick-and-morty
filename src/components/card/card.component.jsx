import React from 'react';
import './card.component.css';

export const Card = props => (
    <div className="card-container">
    <img alt="character" src={ props.character.image }/>
        <h2> { props.character.name } </h2>
        <p> { props.character.status } </p>
        <p> { props.character.species } </p>
        <p> <span>Origin:</span> { props.character.origin.name } </p>
        <p> <span>Location:</span> { props.character.location.name } </p>
    </div>
)