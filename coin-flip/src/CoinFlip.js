import React, { useState } from 'react';
import heads from './dime-front.png';
import tails from './dime-back.png';
import Coin from './Coin';

const CoinFlip = () => {
  const [coinSide, setCoinSide] = useState('');
  const [flipCount, setFlipCount] = useState(0);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);
  const [isCoinFlipped, setIsCoinFlipped] = useState(false);
  const flipCoin = () => {
    setFlipCount(flipCount + 1);
    setIsCoinFlipped(true);
    const rand = Math.random();
    if (rand >= 0.5) {
      setCoinSide(heads);
      checkSide();
    } else {
      setCoinSide(tails);
      checkSide();
    }
  };
  const checkSide = () => {
    if (coinSide === heads) {
      setHeadCount(headCount + 1);
    } else if (coinSide === tails) {
      setTailCount(tailCount + 1);
    }
  };
  return (
    <div className="CoinFlip">
      <h1 className="CoinFlip-header">Let's flip a coin!</h1>
      <button
        onClick={() => {
          flipCoin();
        }}
        data-testid="button"
      >
        FLIP ME!
      </button>
      {isCoinFlipped && <Coin img={coinSide} data-testid="coin" />}
      <p>
        Out of {flipCount} flips there have been {headCount} heads and{' '}
        {tailCount} tails.
      </p>
    </div>
  );
};

export default CoinFlip;
