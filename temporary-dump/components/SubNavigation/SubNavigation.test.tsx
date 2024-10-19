/* Namespaces */
import React from 'react';

/* Components */
import SubNavigation from './SubNavigation';

/* Utils */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { navigationItems } from '@/scripts/getNavigationItems';

describe('SubNavigation', () => {
  const { container } = render(
    <SubNavigation navigationItems={navigationItems.library} showAll={true} />
  );
  it('renders the correct navigation items', () => {
    const navigationItem = container.querySelector('a');
    const linkTitles: string[] = [];
    navigationItems.library.forEach((item) => {
      linkTitles.push(item.title);
    });
    expect(navigationItem.text).toEqual(linkTitles[0]);
  });
  it('renders the sub navigation unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
