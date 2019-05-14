import React from 'react';
import './Random-beer.css';
import OneBeerDetail from '../../components/one-beer-detail/One-beer-detail';
import HomeLink from '../../components/home-link/HomeLink';

const RandomBeer = (props) => {
  const { beers } = props;
  const random = Math.floor(Math.random() * beers.length);
  const beer = beers[random];
  return (
    <div>
      <HomeLink />
      <OneBeerDetail beer={beer}/>
    </div>
  );
};

export default RandomBeer;
