/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import FeaturedPost from './FeaturedPost';

describe('FeaturedPost', () => {
  render(<FeaturedPost />);
  it('renders the correct title', () => {
    const title = screen.getByText('Exploring the Northern Regions');
    expect(title).toBeInTheDocument();
  });
  it('renders the featured post unchanged', () => {
    const { container } = render(<FeaturedPost />);
    expect(container).toMatchSnapshot();
  });
});
