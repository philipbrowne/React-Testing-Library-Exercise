import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CoinFlip from './CoinFlip';

beforeEach(function () {
  jest
    .spyOn(Math, 'random')
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});

afterEach(function () {
  Math.random.mockRestore();
});

it('renders without crashing', () => {
  render(<CoinFlip />);
});

it('should match snapshot', () => {
  const { asFragment } = render(<CoinFlip />);
  expect(asFragment()).toMatchSnapshot();
});

it('does not show coin on load, but shows after click of button', () => {
  const { queryByTestId, queryByAltText } = render(<CoinFlip />);
  const coin = queryByTestId('coin');
  expect(coin).not.toBeInTheDocument();
  const btn = queryByTestId('button');
  fireEvent.click(btn);
  const coinImg = queryByAltText('coin');
  expect(coinImg).toBeInTheDocument();
});

it('shows tails on the first flip and heads on the second flip', () => {
  const { queryByAltText, queryByTestId } = render(<CoinFlip />);
  const btn = queryByTestId('button');
  fireEvent.click(btn);
  const coinImg = queryByAltText('coin');
  expect(coinImg.src).toContain('dime-back.png');
  fireEvent.click(btn);
  expect(coinImg.src).toContain('dime-front.png');
});
