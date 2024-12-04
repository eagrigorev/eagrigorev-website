/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import SocialIcons from './SocialIcons';

describe('SocialIcons', () => {
  render(<SocialIcons showFollowText={true} />);
  it('renders follow text', () => {
    const follow = screen.getByText('follow:');
    expect(follow).toBeInTheDocument();
  });
  it('renders social icons block unchanged', () => {
    const { container } = render(<SocialIcons showFollowText={false} />);
    expect(container).toMatchSnapshot();
  });
});
