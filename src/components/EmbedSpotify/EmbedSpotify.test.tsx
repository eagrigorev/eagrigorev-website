/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

/* Components */
import EmbedSpotify from './EmbedSpotify';

describe('EmbedSpotify', () => {
  const { container } = render(<EmbedSpotify src="test-src" />);
  it('renders embed with the correct height', () => {
    const iframe = container.querySelector('iframe');
    expect(iframe.height).toBe('352');
  });
  it('renders the embed unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
