/* Namespaces */
import React from 'react';

/* Components */
import PostTags from './PostTags';
/* Utils */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('PostTags', () => {
  const { container } = render(<PostTags tags="tag1 tag2 tag3" />);
  it('renders the right amount of tags', () => {
    const tagItems = container.querySelectorAll('li');
    expect(tagItems.length).toBe(3);
  });
  it('renders tags unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
