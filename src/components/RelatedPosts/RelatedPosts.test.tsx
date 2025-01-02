/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import RelatedPosts from './RelatedPosts';

/* Data */
import markdownItems from '@/data/mocks/markdownItems.json';

describe('RelatedPosts', () => {
  render(<RelatedPosts relatedPosts={markdownItems} />);
  it('renders related posts text', () => {
    const heading = screen.getByText('Related Posts');
    expect(heading).toBeInTheDocument();
  });
  it('renders the correct amount of posts', () => {
    const { container } = render(<RelatedPosts relatedPosts={markdownItems} />);
    const postCards = container.querySelectorAll('article');
    expect(postCards.length).toBe(2);
  });
  it('renders the related posts grid unchanged', () => {
    const { container } = render(<RelatedPosts relatedPosts={markdownItems} />);
    expect(container).toMatchSnapshot();
  });
});
