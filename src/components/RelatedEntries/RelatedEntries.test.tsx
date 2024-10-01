/* Namespaces */
import React from 'react';

/* Components */
import RelatedEntries from './RelatedEntries';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { postsSorted } from '@/mocks/postsSorted';

describe('RelatedEntries', () => {
  render(<RelatedEntries posts={postsSorted} />);
  it('renders related entries text', () => {
    const heading = screen.getByText('Related Entries:');
    expect(heading).toBeInTheDocument();
  });
  it('renders the correct amount of posts', () => {
    const { container } = render(<RelatedEntries posts={postsSorted} />);
    const postCards = container.querySelectorAll('article');
    expect(postCards.length).toBe(6);
  });
  it('renders the related posts grid unchanged', () => {
    const { container } = render(<RelatedEntries posts={postsSorted} />);
    expect(container).toMatchSnapshot();
  });
});
