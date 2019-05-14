import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/beers">
        <img src="./img/beers.png" alt="beers-img" />
        <div className="text-container">
          <h1>All Beers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ligula vulputate, suscipit felis at, tristique neque. Maecenas luctus metus vel nulla laoreet, nec tempor leo pulvinar.</p>
        </div>
      </Link>
      <Link to="/random-beer">
        <img src="./img/random-beer.png" alt="random-beer-img" />
        <div className="text-container">
          <h1>Random Beer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ligula vulputate, suscipit felis at, tristique neque. Maecenas luctus metus vel nulla laoreet, nec tempor leo pulvinar.</p>
        </div>
      </Link>
      <Link to="/new-beer">
        <img src="./img/new-beer.png" alt="new-beer-img" />
        <div className="text-container">
          <h1>New Beer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ligula vulputate, suscipit felis at, tristique neque. Maecenas luctus metus vel nulla laoreet, nec tempor leo pulvinar.</p>
        </div>
      </Link>
    </div>
  );
}

export default Home;
