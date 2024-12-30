/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import RootLayoutHeader from './RootLayoutHeader';

describe('RootLayoutHeader', () => {
  render(<RootLayoutHeader />);
  it('renders the website logo with the correct text', () => {
    const logo = screen.getAllByText('Evgenii Grigorev');
    expect(logo.length).toBe(2);
  });
  it('renders desktop navigation unchanged', () => {
    const { container } = render(<RootLayoutHeader />);
    expect(container).toMatchSnapshot();
  });
});
