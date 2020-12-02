import { render, screen } from '@testing-library/react';
import React from 'react';

import Dummy, { Props } from './Dummy';

const DEFAULT_PROPS: Props = {
  text: '',
};

const renderComponent = (props = {}) => {
  return {
    ...render(<Dummy {...DEFAULT_PROPS} {...props} />),
    props: {
      ...DEFAULT_PROPS,
      ...props,
    },
  };
};

test('shows the correct products', () => {
  renderComponent();

  expect(screen.getByText('test')).toBeInTheDocument();
});
