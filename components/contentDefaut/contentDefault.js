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
                className: 'content-narrow',
              },
            },
            h2: {
              props: {
                className: `content-narrow heading ${styles['content-heading']}`,
              },
            },
            h3: {
              props: {
                className: 'content-narrow heading',
              },
            },
            h4: {
              props: {
                className: 'content-narrow heading',
              },
            },
            h5: {
              props: {
                className: 'content-narrow heading',
              },
            },
            h6: {
              props: {
                className: 'content-narrow heading',
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
