/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import PostCardBig from './PostCardBig';

/* Data */
import postMeta from '@/data/mocks/postMeta.json';

describe('PostCardBig', () => {
  render(<PostCardBig postMeta={postMeta} />);
  it('renders the correct title', () => {
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
  });
  it('renders the big post card unchanged', () => {
    const { container } = render(<PostCardBig postMeta={postMeta} />);
    expect(container).toMatchSnapshot();
  });
});
