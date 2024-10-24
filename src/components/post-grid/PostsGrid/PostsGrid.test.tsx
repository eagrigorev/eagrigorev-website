/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

/* Components */
import PostsGrid from './PostsGrid';

/* Utils */
import postsSorted from '@/utils/data/test-data/postsSorted.json';

describe('PostsGrid', () => {
  const { container } = render(
    <PostsGrid posts={postsSorted} showAmount={2} loadAmount={1} />
  );
  it('renders the correct amount of posts', () => {
    const postCards = container.querySelectorAll('article');
    expect(postCards.length).toBe(2);
  });
  it('renders the grid unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
