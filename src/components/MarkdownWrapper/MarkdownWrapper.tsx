/* Global */
import Markdown from 'markdown-to-jsx';
import React from 'react';

/* Components */
import EmbedImage from '@/components/EmbedImage/EmbedImage';
import EmbedSpotify from '@/components/EmbedSpotify/EmbedSpotify';

/* Style */
import styles from './MarkdownWrapper.module.scss';

type Props = {
  content: string;
};

const MarkdownWrapper: React.FunctionComponent<Props> = ({ content }) => {
  return (
    <div className={`grid ${styles['wrapper']}`}>
      <Markdown
        options={{
          wrapper: React.Fragment,
          overrides: {
            p: {
              props: {
                className: `jost-light--m ${styles['content']}`,
              },
            },
            a: {
              props: {
                className: 'link-simple',
              },
            },
            h2: {
              props: {
                className: `spectral-heading--h2 ${styles['content']}`,
              },
            },
            h3: {
              props: {
                className: `spectral-heading--h3 ${styles['content']}`,
              },
            },
            h4: {
              props: {
                className: `spectral-heading--h4 ${styles['content']}`,
              },
            },
            EmbedImage: {
              component: EmbedImage,
            },
            EmbedSpotify: {
              component: EmbedSpotify,
            },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default MarkdownWrapper;
