/* Namespaces */
import React from 'react';

/* Components */
import SubNavigation from './SubNavigation';
import { LIBRARY_SUB_NAVIGATION } from '@/const/navigation';

/* Utils */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('SubNavigation', () => {
  const { container } = render(
    <SubNavigation navigationItems={LIBRARY_SUB_NAVIGATION} showAll={true} />
  );
  it('renders the correct navigation items', () => {
    const navigationItem = container.querySelector('a');
    const linkTitles: string[] = [];
    LIBRARY_SUB_NAVIGATION.forEach((item) => {
      linkTitles.push(item.title);
    });
    expect(navigationItem.text).toEqual(linkTitles[0]);
  });
  it('renders the sub navigation unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
