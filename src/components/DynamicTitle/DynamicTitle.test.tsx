/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import DynamicTitle from './DynamicTitle';

describe('DynamicTitle', () => {
  render(<DynamicTitle style="page-left" title="Test Title" />);
  it('shows the correct title', () => {
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
  });
  it('renders page title unchanged', () => {
    const { container } = render(
      <DynamicTitle style="page-left" title="Test Title" />
    );
    expect(container).toMatchSnapshot();
  });
});
