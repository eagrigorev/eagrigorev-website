import { getPosts, getPostsSlugs } from '@/utils/getPosts';
import React from 'react';
import Title from '@/components/title/title';
import ContentDefault from '@/components/contentDefaut/contentDefault';

const Page = (props) => {
  const slug = props.params.slug;
  const post = getPosts().find((post) => post.meta.slug === slug);
  return (
    <main className="container">
      <Title
        isPage={false}
        title={post.meta.title}
        subtitle={post.meta.subtitle}
        category={post.meta.category}
        datePosted={post.meta.datePosted}
        dateEdited={post.meta.dateEdited}
      />
      {post && post.meta.category === 'Music' ? (
        <ContentDefault content={post.content} />
      ) : (
        <p>Nothing here</p>
      )}
    </main>
  );
};

export default Page;

export const generateStaticParams = async () => {
  return getPostsSlugs();
};
