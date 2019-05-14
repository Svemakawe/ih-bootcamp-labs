import React from 'react';
import './New-beer.css';
import BeerForm from '../../components/beer-form/Beer-form';
import HomeLink from '../../components/home-link/HomeLink';

const NewBeer = (props) => {
  return (
    <div>
      <HomeLink />
      <BeerForm addBeer={props.addBeer}/>
    </div>
  );
};

export default NewBeer;
