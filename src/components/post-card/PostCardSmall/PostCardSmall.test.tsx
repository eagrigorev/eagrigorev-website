/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

/* Components */
import PostCardSmall from './PostCardSmall';

/* Utils */
import postMeta from '@/utils/data/test-data/postMeta.json';

describe('PostCardSmall', () => {
  const { container } = render(<PostCardSmall postMeta={postMeta} />);
  it('renders the correct card width', () => {
    const image = container.querySelector('img');
    expect(image.width).toBe(250);
  });
  it('renders the post card unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
