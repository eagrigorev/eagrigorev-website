/* Utils */
import { sortPostsDesc } from './sort';
import { Post } from '@/utils/types';

const postsUnsorted: Post[] = [
  {
    meta: {
      title: 'Test title 1',
      author: 'Test author 1',
      dateEdited: 'July 25, 2021',
      postType: 'book',
      category: 'Want to Read',
      image: 'test.jpg',
      url: 'test url',
    },
    content: 'Test content 1',
  },
  {
    meta: {
      title: 'Test title 3',
      author: 'Test author 3',
      dateEdited: 'July 25, 2023',
      postType: 'book',
      category: 'Want to Read',
      image: 'test.jpg',
      url: 'test url',
    },
    content: 'Test content 3',
  },
  {
    meta: {
      title: 'Test title 2',
      author: 'Test author 2',
      dateEdited: 'July 25, 2022',
      postType: 'book',
      category: 'Want to Read',
      image: 'test.jpg',
      url: 'test url',
    },
    content: 'Test content 2',
  },
];

const postsSorted: Post[] = [
  {
    meta: {
      title: 'Test title 3',
      author: 'Test author 3',
      dateEdited: 'July 25, 2023',
      postType: 'book',
      category: 'Want to Read',
      image: 'test.jpg',
      url: 'test url',
    },
    content: 'Test content 3',
  },
  {
    meta: {
      title: 'Test title 2',
      author: 'Test author 2',
      dateEdited: 'July 25, 2022',
      postType: 'book',
      category: 'Want to Read',
      image: 'test.jpg',
      url: 'test url',
    },
    content: 'Test content 2',
  },
  {
    meta: {
      title: 'Test title 1',
      author: 'Test author 1',
      dateEdited: 'July 25, 2021',
      postType: 'book',
      category: 'Want to Read',
      image: 'test.jpg',
      url: 'test url',
    },
    content: 'Test content 1',
  },
];

test('Should sort posts correctly', () => {
  expect(sortPostsDesc(postsUnsorted)).toStrictEqual(postsSorted);
});
