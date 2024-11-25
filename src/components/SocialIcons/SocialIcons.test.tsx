/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import SocialIcons from './SocialIcons';

describe('SocialIcons', () => {
  render(<SocialIcons style="default" />);
  it('renders Instagram icon', () => {
    const instagram = screen.getByAltText('Instagram icon');
    expect(instagram).toBeInTheDocument();
  });
  it('renders social icons block unchanged', () => {
    const { container } = render(<SocialIcons style="default" />);
    expect(container).toMatchSnapshot();
  });
});
