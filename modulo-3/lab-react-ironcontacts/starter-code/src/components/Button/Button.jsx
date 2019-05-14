import React from 'react';
import './Button.css';

const Button = (props) => {
  const {name, onClickFunction} = props;
  return (
    <button onClick={() => onClickFunction()}>{name}</button>
  );
}

export default Button;