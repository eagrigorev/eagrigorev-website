/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

/* Components */
import PostCardBig from './PostCardBig';

/* Utils */
import postMeta from '@/utils/data/test-data/postMeta.json';

describe('PostCardBig', () => {
  const { container } = render(<PostCardBig postMeta={postMeta} />);
  it('renders the correct card width', () => {
    const image = container.querySelector('img');
    expect(image.width).toBe(920);
  });
  it('renders the post card unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
