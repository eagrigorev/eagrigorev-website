/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Data */
import categories from '@/data/categories.json';

/* Components */
import CategoriesNavigation from './CategoriesNavigation';

describe('CategoriesNavigation', () => {
  const { container } = render(<CategoriesNavigation showBackLink={false} />);
  it('renders the correct navigation items', () => {
    const navigationItem = container.querySelector('a');
    const linkTitle: string = categories[0].title;
    expect(navigationItem.text).toEqual(linkTitle);
  });
  it('renders the categories navigation unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
