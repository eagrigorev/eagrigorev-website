/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

/* Components */
import SecondaryNavigation from './SecondaryNavigation';

/* Utils */
import postTypesNavigation from '@/utils/data/postTypesNavigation.json';
import { NavigationItem } from '@/utils/types/common';

describe('SecondaryNavigation', () => {
  const { container } = render(
    <SecondaryNavigation navigationItems={postTypesNavigation} />
  );
  it('renders the correct navigation items', () => {
    const navigationItem = container.querySelector('a');
    const linkTitles: string[] = [];
    postTypesNavigation.forEach((item: NavigationItem) => {
      linkTitles.push(item.title);
    });
    expect(navigationItem.text).toEqual(linkTitles[0]);
  });
  it('renders the secondary navigation unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
