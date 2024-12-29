/* Global */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/* Components */
import PageTitle from './PageTitle';

/* Data */
import meta from '@/data/mocks/meta.json';
import navigation from '@/data/mocks/navigation.json';

describe('PageTitle', () => {
  render(
    <PageTitle
      layout="left"
      title="Test Title"
      showBackLink={false}
      navigationItems={navigation}
    />
  );
  it('renders the correct title', () => {
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
  });
  it('renders the metadata', () => {
    const { container } = render(
      <PageTitle layout="centered-meta" title="Test Title" meta={meta} />
    );
    const metaInfo = container.querySelector('.jost-uppercase--xs');
    expect(metaInfo).toBeInTheDocument();
  });
  it('renders page title unchanged', () => {
    const { container } = render(
      <PageTitle
        layout="left"
        title="Test Title"
        showBackLink={false}
        navigationItems={navigation}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
