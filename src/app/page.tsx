/* Global */
import React from 'react';

/* Components */
import PostsGridTemplate from '@/templates/PostsGridTemplate';

/* Data */
import pageTitle from '@/data/pageTitle.json';

/* Scripts */
import { getAllPosts } from '@/scripts/getMarkdown';

/* Utils */
import { Markdown, Meta } from '@/utils/types/markdown';

const Home: React.FunctionComponent<{}> = () => {
  const title = pageTitle.find((item) => item.pageSlug === 'home').title;
  const postsMeta: Meta[] = getAllPosts()
    .filter((post: Markdown) => post.meta.category !== 'Reading Archives')
    .map((post: Markdown) => post.meta);
  return (
    <PostsGridTemplate
      layout="medium"
      title={title}
      showBackLink={false}
      postsMeta={postsMeta}
    />
  );
};

export default Home;
