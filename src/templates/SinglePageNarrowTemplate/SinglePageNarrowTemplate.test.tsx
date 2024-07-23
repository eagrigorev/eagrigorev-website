/* Namespaces */
import React from 'react';

/* Components */
import SinglePageNarrowTemplate from './SinglePageNarrowTemplate';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Post } from '@/utils/types';

const post: Post = {
  meta: {
    title: 'Test title 1',
    slug: 'test-slug',
    datePublished: 'June 30, 2022',
    dateEdited: 'July 25, 2023',
    postType: 'project',
    category: 'Illustrations',
    featuredImage: 'test.jpg',
  },
  content: 'Test content 1',
};

describe('SinglePageNarrowTemplate', () => {
  render(
    <SinglePageNarrowTemplate
      showSeparator={true}
      showMeta={true}
      post={post}
      showRelatedEntries={true}
      postsToShow={3}
      postsToLoad={6}
    />
  );
  it('renders the post content', () => {
    const content = screen.getByText('Test content 1');
    expect(content).toBeInTheDocument();
  });
  it('renders the single page template unchanged', () => {
    const { container } = render(
      <SinglePageNarrowTemplate
        showSeparator={true}
        showMeta={true}
        post={post}
        showRelatedEntries={true}
        postsToShow={3}
        postsToLoad={6}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
