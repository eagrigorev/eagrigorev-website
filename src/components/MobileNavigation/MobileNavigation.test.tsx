/* Namespaces */
import React from 'react';

/* Components */
import MobileNavigation from './MobileNavigation';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('MobileNavigation', () => {
  render(<MobileNavigation />);
  it('renders the correct button text', () => {
    const button = screen.getByText('Menu');
    expect(button).toBeInTheDocument();
  });
  it('renders mobile navigation unchanged', () => {
    const { container } = render(<MobileNavigation />);
    expect(container).toMatchSnapshot();
  });
});
