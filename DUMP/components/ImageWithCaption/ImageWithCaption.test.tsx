/* Namespaces */
import React from 'react';

/* Components */
import ImageWithCaption from './ImageWithCaption';

/* Utils */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('ImageWithCaption', () => {
  const { container } = render(
    <ImageWithCaption
      src="test-image.jpg"
      alt="Test alt description"
      caption="Test description"
      layout="left"
    />
  );
  it('renders image with the correct alt text', () => {
    const image = container.querySelector('img');
    expect(image.alt).toBe('Test alt description');
  });
  it('renders the image unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
