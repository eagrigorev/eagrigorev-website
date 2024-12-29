/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

/* Components */
import SocialIcons from './SocialIcons';

describe('SocialIcons', () => {
  it('renders social icons block unchanged', () => {
    const { container } = render(<SocialIcons showFollowText={false} />);
    expect(container).toMatchSnapshot();
  });
});
