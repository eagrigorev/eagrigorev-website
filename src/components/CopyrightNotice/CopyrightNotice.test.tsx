/* Namespaces */
import React from 'react';

/* Components */
import CopyrightNotice from './CopyrightNotice';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

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
