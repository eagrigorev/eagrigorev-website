/* Namespaces */
import React from 'react';

/* Components */
import CategoryPageTemplate from './CategoryPageTemplate';

/* Utils */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { NavigationItem } from '@/utils/types';

const navItems: NavigationItem[] = [
  {
    title: 'Test Link 1',
    url: 'Test Url 1',
  },
  {
    title: 'Test Link 2',
    url: 'Test Url 2',
  },
];

describe('CategoryPageTemplate', () => {
  const { container } = render(
    <CategoryPageTemplate
      pageTitle="Test Page"
      navigationItems={navItems}
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
