/* Namespaces */
import React from 'react';

/* Components */
import GridGenerator from '../GridGenerator/GridGenerator';

/* Utils */
import { getSortedPosts } from '@/scripts/getPosts';
import { Post, PostType, PostCategory } from '@/types/post';

type Props = {
  postType: PostType;
  category: PostCategory | 'Journal' | 'Library' | 'Works';
  postsToShow: number;
  postsToLoad: number;
};

const PostsGrid: React.FunctionComponent<Props> = ({
  postType,
  category,
  postsToShow,
  postsToLoad,
}) => {
  const allPosts: Post[] = getSortedPosts(postType, category);
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
