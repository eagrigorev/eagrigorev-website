/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import HeaderNavigation from './HeaderNavigation';

describe('HeaderNavigation', () => {
  render(<HeaderNavigation />);
  it('renders both website logos with the correct text', () => {
    const logo = screen.getAllByText('Evgenii Grigorev');
    expect(logo.length).toBe(2);
  });
  it('renders header navigation unchanged', () => {
    const { container } = render(<HeaderNavigation />);
    expect(container).toMatchSnapshot();
  });
});
