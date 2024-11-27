/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import PageTitleLeft from './PageTitleLeft';

describe('PageTitleLeft', () => {
  render(<PageTitleLeft title="Test Title" />);
  it('renders the correct title', () => {
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
  });
  it('renders page title unchanged', () => {
    const { container } = render(<PageTitleLeft title="Test Title" />);
    expect(container).toMatchSnapshot();
  });
});
