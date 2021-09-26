import React from 'react';
import { render, screen } from '@testing-library/react';
import Coin from './Coin';

it('renders without crashing', () => {
  render(<Coin />);
});

it('should match snapshot', () => {
  const { asFragment } = render(<Coin />);
  expect(asFragment()).toMatchSnapshot();
});
