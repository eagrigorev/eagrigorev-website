import styles from './contentDefault.module.scss';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import ImageSingle from '../imageSingle/imageSingle';

const ContentDefault = ({ content }) => {
  return (
    <section className={`${styles['wrapper']} grid`}>
      <Markdown
        options={{
          wrapper: React.Fragment,
          overrides: {
            a: {
              props: {
                className: 'link link--post',
              },
            },
            p: {
              props: {
                className: 'content-narrow paragraph paragraph--light-m-150',
              },
            },
            h2: {
              props: {
                className: 'content-narrow heading heading--medium-2xl-125',
              },
            },
            h3: {
              props: {
                className: 'content-narrow heading heading--medium-xl-125',
              },
            },
            h4: {
              props: {
                className: 'content-narrow heading heading--medium-l-125',
              },
            },
            h5: {
              props: {
                className: 'content-narrow heading heading--medium-m-125',
              },
            },
            h6: {
              props: {
                className: 'content-narrow heading heading--medium-s-125',
              },
            },
            ImageSingle: {
              component: ImageSingle,
            },
          },
        }}
      >
        {content}
      </Markdown>
    </section>
  );
};

export default ContentDefault;
