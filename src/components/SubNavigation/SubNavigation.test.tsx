/* Namespaces */
import React from 'react';

/* Components */
import SubNavigation from './SubNavigation';

/* Utils */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { libraryNavItems } from '@/scripts/getNavigationItems';

describe('SubNavigation', () => {
  const { container } = render(
    <SubNavigation navigationItems={libraryNavItems} showAll={true} />
  );
  it('renders the correct navigation items', () => {
    const navigationItem = container.querySelector('a');
    const linkTitles: string[] = [];
    libraryNavItems.forEach((item) => {
      linkTitles.push(item.title);
    });
    expect(navigationItem.text).toEqual(linkTitles[0]);
  });
  it('renders the sub navigation unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
