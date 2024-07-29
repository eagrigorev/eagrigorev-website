/* Namespaces */
import React from 'react';

/* Components */
import GridGenerator from '../GridGenerator/GridGenerator';

/* Utils */
import { getSortedPosts } from '@/scripts/getPosts';
import { Post, PostType, PostCategory } from '@/types/post';

type Props = {
  postType: PostType;
  category: PostCategory | 'all';
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
        postType={postType}
        posts={allPosts}
        postsToShow={postsToShow}
        postsToLoad={postsToLoad}
      />
    </section>
  );
};

export default PostsGrid;
