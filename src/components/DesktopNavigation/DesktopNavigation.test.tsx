/* Namespaces */
import React from 'react';

/* Components */
import DesktopNavigation from './DesktopNavigation';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('DesktopNavigation', () => {
  render(<DesktopNavigation />);
  it('renders the website logo with the correct text', () => {
    const logo = screen.getByText('Evgenii Grigorev');
    expect(logo).toBeInTheDocument();
  });
  it('renders desktop navigation unchanged', () => {
    const { container } = render(<DesktopNavigation />);
    expect(container).toMatchSnapshot();
  });
});
