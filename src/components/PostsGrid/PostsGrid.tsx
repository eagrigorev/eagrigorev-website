/* Namespaces */
import React from 'react';

/* Components */
import GridGenerator from '../GridGenerator/GridGenerator';

/* Utils */
import { getSortedPosts } from '@/scripts/getPosts';
import { ParentCategories, Post, PostCategory } from '@/types/post';
import { calculatePostsToShowAndLoad } from '@/scripts/utils';

type Props = {
  category: PostCategory | ParentCategories;
};

const PostsGrid: React.FunctionComponent<Props> = ({ category }) => {
  const allPosts: Post[] = getSortedPosts(category);
  const postsAmount = calculatePostsToShowAndLoad(allPosts);
  return (
    <section>
      <GridGenerator
        posts={allPosts}
        postsToShow={postsAmount.toShowInGrid}
        postsToLoad={postsAmount.toLoadInGrid}
      />
    </section>
  );
};

export default PostsGrid;
