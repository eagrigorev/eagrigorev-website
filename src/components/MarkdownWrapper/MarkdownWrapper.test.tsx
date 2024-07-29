/* Namespaces */
import React from 'react';

/* Components */
import MarkdownWrapper from './MarkdownWrapper';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('MarkdownWrapper', () => {
  render(<MarkdownWrapper layout="narrow" content="Test content" />);
  it('renders content', () => {
    const content = screen.getByText('Test content');
    expect(content).toBeInTheDocument();
  });
  it('renders the markdown wrapper unchanged', () => {
    const { container } = render(
      <MarkdownWrapper layout="narrow" content="Test content" />
    );
    expect(container).toMatchSnapshot();
  });
});
