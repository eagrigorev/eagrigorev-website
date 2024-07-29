/* Namespaces */
import React from 'react';

/* Components */
import GridGenerator from './GridGenerator';

/* Utils */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { postsSorted } from '@/mocks/postsSorted';

describe('GridGenerator', () => {
  const { container } = render(
    <GridGenerator
      postType="book"
      posts={postsSorted}
      postsToShow={3}
      postsToLoad={3}
    />
  );
  it('renders the correct amount of posts', () => {
    const postCards = container.querySelectorAll('article');
    expect(postCards.length).toBe(3);
  });
  it('renders the grid unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
