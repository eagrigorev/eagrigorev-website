/* Namespaces */
import React from 'react';

/* Components */
import SinglePageSplitTemplate from './SinglePageSplitTemplate';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { post } from '../../mocks/post';

describe('SinglePageSplitTemplate', () => {
  render(
    <SinglePageSplitTemplate
      showSeparator={true}
      showMeta={false}
      post={post}
      imageSrc="test.jpg"
      imageAlt="Test"
      imageCaption="Test caption"
      imageLayout="left-split"
    />
  );
  it('renders the post content', () => {
    const content = screen.getByText('Test content 1');
    expect(content).toBeInTheDocument();
  });
  it('renders the single page template unchanged', () => {
    const { container } = render(
      <SinglePageSplitTemplate
        showSeparator={true}
        showMeta={false}
        post={post}
        imageSrc="test.jpg"
        imageAlt="Test"
        imageCaption="Test caption"
        imageLayout="left-split"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
