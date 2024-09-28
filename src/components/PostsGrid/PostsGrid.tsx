/* Namespaces */
import React from 'react';

/* Components */
import GridGenerator from '../GridGenerator/GridGenerator';

/* Utils */
import { getSortedPosts } from '@/scripts/getPosts';
import { Post, PostCategory } from '@/types/post';

type Props = {
  category: PostCategory | 'Journal' | 'Library' | 'Works';
  postsToShow: number;
  postsToLoad: number;
};

const PostsGrid: React.FunctionComponent<Props> = ({
  category,
  postsToShow,
  postsToLoad,
}) => {
  const allPosts: Post[] = getSortedPosts(category);
  return (
    <section>
      <GridGenerator
        posts={allPosts}
        postsToShow={postsToShow}
        postsToLoad={postsToLoad}
      />
    </section>
  );
};

export default PostsGrid;
