/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import PageTitle from './PageTitle';

describe('PageTitle', () => {
  render(<PageTitle title="Test Title" />);
  it('shows the correct title', () => {
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
  });
  it('renders page title unchanged', () => {
    const { container } = render(<PageTitle title="Test Title" />);
    expect(container).toMatchSnapshot();
  });
});
