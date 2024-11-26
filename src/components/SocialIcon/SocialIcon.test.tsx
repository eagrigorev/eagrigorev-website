/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import SocialIcon from './SocialIcon';

describe('SocialIcon', () => {
  render(<SocialIcon icon={{ title: 'Test', url: '/test' }} />);
  it('renders Test icon', () => {
    const icon = screen.getByAltText('Test icon');
    expect(icon).toBeInTheDocument();
  });
  it('renders social icon unchanged', () => {
    const { container } = render(
      <SocialIcon icon={{ title: 'Test', url: '/test' }} />
    );
    expect(container).toMatchSnapshot();
  });
});
