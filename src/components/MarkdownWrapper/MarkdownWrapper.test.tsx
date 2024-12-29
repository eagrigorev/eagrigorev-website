/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import MarkdownWrapper from './MarkdownWrapper';

describe('MarkdownWrapper', () => {
  render(<MarkdownWrapper content="Test content" />);
  it('renders content', () => {
    const content = screen.getByText('Test content');
    expect(content).toBeInTheDocument();
  });
  it('renders the markdown wrapper unchanged', () => {
    const { container } = render(<MarkdownWrapper content="Test content" />);
    expect(container).toMatchSnapshot();
  });
});
