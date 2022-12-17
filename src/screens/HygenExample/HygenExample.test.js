import React from 'react';
import { screen, render } from '@testing-library/react';

import HygenExample from './HygenExample';

describe('HygenExample', () => {
  const { container } = render(< HygenExample />);
  expect(container).toMatchSnapshot();
})