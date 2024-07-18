/* Namespaces */
import React from 'react';

/* Components */
import PostCard from './PostCard';

/* Utils */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PostMeta } from '@/utils/types';

const postMeta: PostMeta = {
  title: 'Book title',
  author: 'Author',
  dateEdited: 'June 1, 2024',
  postType: 'book',
  category: 'Want to Read',
  image: 'test-image.jpg',
  url: 'https://test-url',
};

describe('PostCard', () => {
  const { container } = render(
    <PostCard cardType="book" postMeta={postMeta} />
  );
  it('renders the correct card width', () => {
    const image = container.querySelector('img');
    expect(image.width).toBe(250);
  });
  it('renders the post card unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
