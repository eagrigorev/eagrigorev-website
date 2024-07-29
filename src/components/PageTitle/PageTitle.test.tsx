/* Namespaces */
import React from 'react';

/* Components */
import PageTitle from './PageTitle';

/* Utils */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('PageTitle', () => {
  render(
    <PageTitle
      title="Test Title"
      showSeparator={true}
      showMeta={true}
      dateEdited="May 14, 2024"
      category="Illustrations"
    />
  );
  it('shows the correct title', () => {
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
  });
  it('renders the metadata', () => {
    const { container } = render(
      <PageTitle
        title="Test Title"
        showSeparator={true}
        showMeta={true}
        dateEdited="May 14, 2024"
        category="Illustrations"
      />
    );
    const meta = container.querySelector('.small-uppercase');
    expect(meta).toBeInTheDocument();
  });
  it('renders page title unchanged', () => {
    const { container } = render(
      <PageTitle
        title="Test Title"
        showSeparator={true}
        showMeta={true}
        dateEdited="May 14, 2024"
        category="Illustrations"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
