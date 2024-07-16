/* Global */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

/* Local */
import CopyrightNotice from './CopyrightNotice';

describe('CopyrightNotice', () => {
  render(<CopyrightNotice />);
  it('renders a footer with the correct text', () => {
    const footerHeading = screen.getByText('© 2024 Evgenii Grigorev');
    expect(footerHeading).toBeInTheDocument();
  });
  it('renders footer unchanged', () => {
    const { container } = render(<CopyrightNotice />);
    expect(container).toMatchSnapshot();
  });
});
