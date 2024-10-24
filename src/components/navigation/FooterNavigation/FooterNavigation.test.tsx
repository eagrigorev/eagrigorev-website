/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import FooterNavigation from './FooterNavigation';

describe('FooterNavigation', () => {
  render(<FooterNavigation />);
  it('renders a footer with the correct text', () => {
    const footerHeading = screen.getByText('© 2024 Evgenii Grigorev');
    expect(footerHeading).toBeInTheDocument();
  });
  it('renders footer unchanged', () => {
    const { container } = render(<FooterNavigation />);
    expect(container).toMatchSnapshot();
  });
});
