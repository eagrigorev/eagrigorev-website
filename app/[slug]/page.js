import styles from './page.module.scss';
import Image from 'next/image';
import PostTitle from '@/components/postTitle';
import { getPosts, getPostsSlugs } from '@/utils/getPosts';

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
          <Image className={styles['images']} alt="Post Image" />
          <div className={styles['description']}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </section>
      </main>
    );
  } else return <>NOPE</>;
};

export default Page;

export const generateStaticParams = async () => {
  return getPostsSlugs();
};
