/* Namespaces */
import React from 'react';

/* Components */
import TagsPageTemplate from './TagsPageTemplate';

/* Utils */
import '@testing-library/jest-dom';
import { TAGS_SUB_NAVIGATION } from '@/const/navigation';
import { render } from '@testing-library/react';

describe('TagsPageTemplate', () => {
  const { container } = render(
    <TagsPageTemplate
      pageTitle="Tags."
      navigationItems={TAGS_SUB_NAVIGATION}
      showAll={false}
    />
  );
  it('renders the template unchanged', () => {
    expect(container).toMatchSnapshot();
  });
});
