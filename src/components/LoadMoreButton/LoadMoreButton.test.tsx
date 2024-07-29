/* Namespaces */
import React from 'react';

/* Components */
import LoadMoreButton from './LoadMoreButton';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

const testHandler = (): void => {
  console.log('Clicked!');
};

describe('LoadMoreButton', () => {
  render(
    <LoadMoreButton clickHandler={testHandler} buttonText="Test Button" />
  );
  it('renders the correct button name', () => {
    const button = screen.getByText('Test Button');
    expect(button).toBeInTheDocument();
  });
  it('renders the button unchanged', () => {
    const { container } = render(
      <LoadMoreButton clickHandler={testHandler} buttonText="Test Button" />
    );
    expect(container).toMatchSnapshot();
  });
});
