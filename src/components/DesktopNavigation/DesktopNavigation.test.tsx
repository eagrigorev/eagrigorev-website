/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import DesktopNavigation from './DesktopNavigation';

describe('DesktopNavigation', () => {
  render(<DesktopNavigation />);
  it('renders website logo with the correct text', () => {
    const logo = screen.getByText('Evgenii Grigorev');
    expect(logo).toBeInTheDocument();
  });
  it('renders desktop navigation unchanged', () => {
    const { container } = render(<DesktopNavigation />);
    expect(container).toMatchSnapshot();
  });
});
