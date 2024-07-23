/* Namespaces */
import React from 'react';

/* Components */
import TopNavigation from './TopNavigation';

/* Utils */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('TopNavigation', () => {
  it('renders top navigation unchanged', () => {
    const { container } = render(<TopNavigation />);
    expect(container).toMatchSnapshot();
  });
});
