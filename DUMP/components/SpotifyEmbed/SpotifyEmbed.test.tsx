/* Namespaces */
import React from 'react';

/* Components */
import SpotifyEmbed from './SpotifyEmbed';

/* Utils */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('SpotifyEmbed', () => {
  const { container } = render(<SpotifyEmbed src="test-src" layout="big" />);
  it('renders embed with the correct height', () => {
    const iframe = container.querySelector('iframe');
    expect(iframe.height).toBe('352');
  });
  it('renders the embed unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
