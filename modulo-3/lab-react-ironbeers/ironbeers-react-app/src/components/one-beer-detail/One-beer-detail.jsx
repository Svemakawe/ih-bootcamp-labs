import React from 'react';
import './One-beer-detail.css';

const OneBeerDetail = (props) => {
  const { image_url, name, tagline, attenuation_level, first_brewed, description, contributed_by } = props.beer;
  return (
    <div>
        <img src={image_url} alt="beer" width="80" />
        <div>
          <div>
            <h1>{name}</h1>
            <h2>{tagline}</h2>
          </div>
          <div>
            <p>{attenuation_level}</p>
            <p>{first_brewed}</p>
          </div>
        </div>
        <p>{description}</p>
        <p>Contributed by: {contributed_by}</p>
      </div>
  );
};

export default OneBeerDetail;
