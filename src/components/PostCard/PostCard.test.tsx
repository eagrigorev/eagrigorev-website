/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

/* Components */
import PostCard from './PostCard';

/* Data */
import meta from '@/data/mocks/meta.json';

describe('PostCard', () => {
  const { container } = render(<PostCard layout="medium" postMeta={meta} />);
  it('renders the correct card width', () => {
    const image = container.querySelector('img');
    expect(image.width).toBe(920);
  });
  it('renders the post card unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
