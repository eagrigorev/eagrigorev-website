import styles from './contentWide.module.scss';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import ImageSingle from '../imageSingle/imageSingle';

const ContentWide = ({ image, alt, description, content }) => {
  return (
    <section className={`${styles['wrapper']} grid`}>
      <ImageSingle
        src={image}
        alt={alt}
        description={description}
        type="wide-half"
      />
      <div className={styles['content']}>
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
                  className: 'paragraph paragraph--light-m-150',
                },
              },
              h2: {
                props: {
                  className: 'heading heading--medium-2xl-125',
                },
              },
              h3: {
                props: {
                  className: 'heading heading--medium-xl-125',
                },
              },
              h4: {
                props: {
                  className: 'heading heading--medium-l-125',
                },
              },
              h5: {
                props: {
                  className: 'heading heading--medium-m-125',
                },
              },
              h6: {
                props: {
                  className: 'heading heading--medium-s-125',
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
      </div>
    </section>
  );
};

export default ContentWide;
