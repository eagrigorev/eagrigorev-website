/* Namespaces */
import React from 'react';

/* Components */
import SocialIcons from './SocialIcons';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('SocialIcons', () => {
  render(<SocialIcons />);
  it('renders a certain social icon with the correct text', () => {
    const socialIcon = screen.getByText('Gh.');
    expect(socialIcon).toBeInTheDocument();
  });
  it('renders social icons block unchanged', () => {
    const { container } = render(<SocialIcons />);
    expect(container).toMatchSnapshot();
  });
});
