/* Namespaces */
import React from 'react';

/* Components */
import SocialIcons from './SocialIcons';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('SocialIcons', () => {
  render(<SocialIcons />);
  it('renders social icons block unchanged', () => {
    const { container } = render(<SocialIcons />);
    expect(container).toMatchSnapshot();
  });
});
