/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

/* Components */
import PostCardMedium from './PostCardMedium';

/* Utils */
import postMeta from '@/utils/data/test-data/postMeta.json';

describe('PostCardMedium', () => {
  const { container } = render(<PostCardMedium postMeta={postMeta} />);
  it('renders the correct card width', () => {
    const image = container.querySelector('img');
    expect(image.width).toBe(440);
  });
  it('renders the post card unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
