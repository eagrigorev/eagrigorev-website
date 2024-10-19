/* Namespaces */
import React from 'react';

/* Components */
import PostsGrid from './PostsGrid';

/* Utils */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('PostsGrid', () => {
  const { container } = render(<PostsGrid category="Want to Read" />);
  it('renders the posts grid unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
