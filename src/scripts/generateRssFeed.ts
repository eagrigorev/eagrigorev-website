/* Global */
import fs from 'fs';
import { Feed } from 'feed';

/* Utils */
import { Markdown } from '@/utils/types/markdown';
import { URL } from '@/utils/const/url';

const generateRssFeed = (posts: Markdown[]) => {
  const author = {
    name: 'Evgenii Grigorev',
    link: 'https://www.instagram.com/eagrigorev/',
  };
  const feed = new Feed({
    title: 'Evgenii Grigorev',
    description: 'Software developer and artist based in Thessaloniki, Greece.',
    id: URL.HOMEPAGE,
    link: URL.HOMEPAGE,
    language: 'en',
    feedLinks: {
      rss2: `${URL.HOMEPAGE}/rss.xml`,
    },
    author: author,
    copyright: 'Evgenii Grigorev',
  });
  posts.forEach((post: Markdown) => {
    const slug: string = `${URL.HOMEPAGE}/${post.meta.slug}`;
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
