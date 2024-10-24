/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import HeaderNavigation from './HeaderNavigation';

describe('HeaderNavigation', () => {
  render(<HeaderNavigation />);
  it('renders the website logo with the correct text', () => {
    const logo = screen.getByText('Evgenii Grigorev');
    expect(logo).toBeInTheDocument();
  });
  it('renders the correct button text', () => {
    const button = screen.getByText('Menu');
    expect(button).toBeInTheDocument();
  });
  it('renders header navigation unchanged', () => {
    const { container } = render(<HeaderNavigation />);
    expect(container).toMatchSnapshot();
  });
});
