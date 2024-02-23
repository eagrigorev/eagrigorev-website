import styles from './page.module.scss';
import { getPosts, getPostsSlugs } from '@/utils/getPosts';
import Image from 'next/image';
import PostTitle from '@/components/postTitle';
import ImageGallery from '@/components/imageGallery';

const Page = (props) => {
  const slug = props.params.slug;
  const post = getPosts().find((post) => post.meta.slug === slug);
  if (post && post.meta.category === 'Music') {
    return (
      <main className="container">
        <PostTitle
          title={post.meta.title}
          category={post.meta.category}
          date={post.meta.date}
        />
        <section className={`${styles['wrapper']} grid`}>
          <ImageGallery
            className={styles['images']}
            images={post.meta.images}
          />
          <div className={styles['description']}>text</div>
        </section>
      </main>
    );
  } else return <>NOPE</>;
};

export default Page;

export const generateStaticParams = async () => {
  return getPostsSlugs();
};
