import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render', () => {
  const { getByText } = render(<App />);

  const topLeftElement = getByText(/Top Left/i);
  const topRightElement = getByText(/Top Right/i);
  const bottomLeftElement = getByText(/Bottom Left/i);
  const bottomRightElement = getByText(/Bottom Right/i);

  expect(topLeftElement).toBeInTheDocument();
  expect(topRightElement).toBeInTheDocument();
  expect(bottomLeftElement).toBeInTheDocument();
  expect(bottomRightElement).toBeInTheDocument();
});
