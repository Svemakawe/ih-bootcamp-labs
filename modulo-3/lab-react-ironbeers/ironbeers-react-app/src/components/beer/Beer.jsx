import React from 'react';
import { Link } from 'react-router-dom';
import './Beer.css';

const Beer = (props) => {
  return (
    <Link to={`/beer-detail/${props.id}`}>
      <div className="beer-container">
        <div key={props.keyCode}>
          <img src={props.img} alt="beer" width="60" />
        </div>
        <div>
          <h1>{props.name}</h1>
          <h2>{props.tagline}</h2>
          <p>Created by: {props.contributed}</p>
        </div>
      </div>
    </Link>
  );
};

export default Beer;