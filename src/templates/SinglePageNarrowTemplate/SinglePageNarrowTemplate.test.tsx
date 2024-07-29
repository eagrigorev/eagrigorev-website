/* Namespaces */
import React from 'react';

/* Components */
import SinglePageNarrowTemplate from './SinglePageNarrowTemplate';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { post } from '@/mocks/post';

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
