/* Namespaces */
import React from 'react';

/* Components */
import PostCard from './PostCard';

/* Utils */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { postMeta } from '../../mocks/postMeta';

describe('PostCard', () => {
  const { container } = render(<PostCard postMeta={postMeta} />);
  it('renders the correct card width', () => {
    const image = container.querySelector('img');
    expect(image.width).toBe(440);
  });
  it('renders the post card unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
