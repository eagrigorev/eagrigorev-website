/* Namespaces */
import fs from 'fs';

/* Utils */
import { Feed } from 'feed';
import { Post } from '@/utils/types';

const generateRssFeed = (posts: Post[]) => {
  const URL = 'https://eagrigorev.com';
  const author = {
    name: 'Evgenii Grigorev',
    link: 'https://www.instagram.com/eagrigorev/',
  };
  const feed = new Feed({
    title: 'Evgenii Grigorev',
    description: 'Software developer and artist based in Thessaloniki, Greece.',
    id: URL,
    link: URL,
    language: 'en',
    feedLinks: {
      rss2: `${URL}/rss.xml`,
    },
    author: author,
    copyright: 'Evgenii Grigorev',
  });
  posts.forEach((post: Post) => {
    const slug: string = `${URL}/${post.meta.slug}`;
    feed.addItem({
      title: post.meta.title,
      id: slug,
      link: slug,
      author: [author],
      date: new Date(post.meta.dateEdited),
    });
  });
  fs.writeFileSync('public/rss.xml', feed.rss2());
};

export default generateRssFeed;
