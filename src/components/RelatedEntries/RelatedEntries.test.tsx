/* Namespaces */
import React from 'react';

/* Components */
import RelatedEntries from './RelatedEntries';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Post } from '@/utils/types';

const posts: Post[] = [
  {
    meta: {
      title: 'Test title 1',
      author: 'Test author 1',
      dateEdited: 'July 25, 2021',
      postType: 'book',
      category: 'Want to Read',
      image: 'test.jpg',
      url: 'test url',
    },
    content: 'Test content 1',
  },
  {
    meta: {
      title: 'Test title 2',
      author: 'Test author 2',
      dateEdited: 'July 25, 2021',
      postType: 'book',
      category: 'Want to Read',
      image: 'test.jpg',
      url: 'test url',
    },
    content: 'Test content 2',
  },
  {
    meta: {
      title: 'Test title 3',
      author: 'Test author 3',
      dateEdited: 'July 25, 2021',
      postType: 'book',
      category: 'Want to Read',
      image: 'test.jpg',
      url: 'test url',
    },
    content: 'Test content 3',
  },
];

describe('RelatedEntries', () => {
  render(
    <RelatedEntries
      postType="book"
      posts={posts}
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
        posts={posts}
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
        posts={posts}
        postsToShow={3}
        postsToLoad={3}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
