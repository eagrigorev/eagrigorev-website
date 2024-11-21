import fs from 'fs';
import { Feed } from 'feed';
import { URL } from '../../DUMP/const/url';
import { Markdown } from '@/utils/types/markdown';

const generateRssFeed = (posts: Markdown[]) => {
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
  posts.forEach((post: Markdown) => {
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
