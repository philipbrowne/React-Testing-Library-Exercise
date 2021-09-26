import React, { useState } from 'react';
import './Coin.css';

const Coin = ({ img }) => {
  return (
    <div className="Coin">
      <img className="Coin-Img" src={img} alt="coin" />
    </div>
  );
};

export default Coin;
