/* Namespaces */
import React from 'react';

/* Components */
import CategoryPageTemplate from './CategoryPageTemplate';

/* Utils */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { navigationItems } from '@/mocks/navigationItems';

describe('CategoryPageTemplate', () => {
  const { container } = render(
    <CategoryPageTemplate
      pageTitle="Test Page"
      navigationItems={navigationItems}
      showAll={true}
      postType="project"
      category="Illustrations"
      postsToShow={3}
      postsToLoad={3}
    />
  );
  it('renders the correct amount of posts', () => {
    const posts = container.querySelectorAll('article');
    expect(posts.length).toBe(3);
  });
  it('renders the category page template unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
