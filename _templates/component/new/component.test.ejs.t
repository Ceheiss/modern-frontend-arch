---
to: src/<%= h.getTypePath(locals.type) %>/<%=name%>/<%=name%>.test.js
---
import React from 'react';
import { screen, render } from '@testing-library/react';

import <%= name %> from './<%= name %>';

describe('<%= name %>', () => {
  const { container } = render(< <%= name %> />);
  expect(container).toMatchSnapshot();
})