/* Namespaces */
import fs from 'fs';

/* Utils */
import { Feed } from 'feed';
import { Post } from '@/types/post';
import { URL } from '@/const/url';

const generateRssFeed = (posts: Post[]) => {
  const author = {
    name: 'Evgenii Grigorev',
    link: 'https://www.instagram.com/eagrigorev/',
  };
  const feed = new Feed({
    title: 'Evgenii Grigorev',
    description: 'Software developer and artist based in Thessaloniki, Greece.',
    id: URL.BASE,
    link: URL.BASE,
    language: 'en',
    feedLinks: {
      rss2: `${URL.BASE}/rss.xml`,
    },
    author: author,
    copyright: 'Evgenii Grigorev',
  });
  posts.forEach((post: Post) => {
    const slug: string = `${URL.BASE}/${post.meta.slug}`;
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
