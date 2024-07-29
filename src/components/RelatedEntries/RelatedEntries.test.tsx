/* Namespaces */
import React from 'react';

/* Components */
import RelatedEntries from './RelatedEntries';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { postsSorted } from '@/mocks/postsSorted';

describe('RelatedEntries', () => {
  render(
    <RelatedEntries
      postType="book"
      posts={postsSorted}
      postsToShow={3}
      postsToLoad={3}
    />
  );
  it('renders related entries text', () => {
    const heading = screen.getByText('Related Entries:');
    expect(heading).toBeInTheDocument();
  });
  it('renders the correct amount of posts', () => {
    const { container } = render(
      <RelatedEntries
        postType="book"
        posts={postsSorted}
        postsToShow={3}
        postsToLoad={3}
      />
    );
    const postCards = container.querySelectorAll('article');
    expect(postCards.length).toBe(3);
  });
  it('renders the related posts grid unchanged', () => {
    const { container } = render(
      <RelatedEntries
        postType="book"
        posts={postsSorted}
        postsToShow={3}
        postsToLoad={3}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
