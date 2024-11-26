/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import MobileNavigation from './MobileNavigation';

describe('MobileNavigation', () => {
  render(<MobileNavigation />);
  it('renders website logo with the correct text', () => {
    const logo = screen.getByText('Evgenii Grigorev');
    expect(logo).toBeInTheDocument();
  });
  it('renders mobile navigation unchanged', () => {
    const { container } = render(<MobileNavigation />);
    expect(container).toMatchSnapshot();
  });
});
