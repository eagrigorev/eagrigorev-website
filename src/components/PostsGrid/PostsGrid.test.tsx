/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

/* Components */
import PostsGrid from './PostsGrid';

/* Data */
import metaItems from '@/data/mocks/metaItems.json';

describe('PostsGrid', () => {
  const { container } = render(
    <PostsGrid layout="medium" postsMeta={metaItems} />
  );
  it('renders the correct amount of posts', () => {
    const postCards = container.querySelectorAll('article');
    expect(postCards.length).toBe(3);
  });
  it('renders the grid unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
