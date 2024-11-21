/* Namespaces */
import React from 'react';

/* Components */
import GridGenerator from '../GridGenerator/GridGenerator';

/* Utils */
import { getSortedPosts } from '@/scripts/getPosts';
import { ParentCategories, Post, PostCategory } from '../../types/post';
import { calculatePostsToShowAndLoad } from '@/scripts/utils';
import { PostsAmount } from '../../types/postsAmount';

type Props = {
  category: PostCategory | ParentCategories;
};

const PostsGrid: React.FunctionComponent<Props> = ({ category }) => {
  const allPosts: Post[] = getSortedPosts(category);
  const postsAmount: PostsAmount = calculatePostsToShowAndLoad(allPosts);
  return (
    <section>
      <GridGenerator
        posts={allPosts}
        postsToShow={postsAmount.grid.toShow}
        postsToLoad={postsAmount.grid.toLoad}
      />
    </section>
  );
};

export default PostsGrid;
