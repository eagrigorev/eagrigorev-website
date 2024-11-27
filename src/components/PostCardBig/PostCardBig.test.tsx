/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import PostCardBig from './PostCardBig';

describe('PostCardBig', () => {
  render(<PostCardBig />);
  it('renders the correct title', () => {
    const title = screen.getByText('Exploring the Northern Regions');
    expect(title).toBeInTheDocument();
  });
  it('renders the big post card unchanged', () => {
    const { container } = render(<PostCardBig />);
    expect(container).toMatchSnapshot();
  });
});
