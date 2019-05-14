import React from 'react';
import { Link } from 'react-router-dom';
import './HomeLink.css';

const HomeLink = () => {
  return (
    <Link to="/">
      <img src="../img/home.png" alt="home-icon" width="100%" />
    </Link>
  );
}

export default HomeLink;
