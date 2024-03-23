import { getPosts, getPostsSlugs } from '@/utils/getPosts';
import React from 'react';
import Title from '@/components/title/title';
import ContentDefault from '@/components/contentDefaut/contentDefault';

const Page = (props) => {
  const slug = props.params.slug;
  const post = getPosts().find((post) => post.meta.slug === slug);
  if (post) {
    return (
      <main className="container">
        <Title
          isWide={false}
          showMeta={true}
          title={post.meta.title}
          subtitle={post.meta.subtitle}
          category={post.meta.category}
          datePosted={post.meta.datePosted}
          dateEdited={post.meta.dateEdited}
        />
        <ContentDefault content={post.content} />
      </main>
    );
  } else {
    return <p>Nothing here</p>;
  }
};

export default Page;

export const generateStaticParams = async () => {
  return getPostsSlugs();
};
