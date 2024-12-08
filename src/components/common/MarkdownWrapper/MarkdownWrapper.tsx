/* Global */
import Markdown from 'markdown-to-jsx';
import React from 'react';

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
                className: `paragraph--light-m ${styles['content']}`,
              },
            },
            a: {
              props: {
                className: 'underline',
              },
            },
            h2: {
              props: {
                className: `heading--h2 ${styles['content']}`,
              },
            },
            h3: {
              props: {
                className: `heading--h3 ${styles['content']}`,
              },
            },
            h4: {
              props: {
                className: `heading--h4 ${styles['content']}`,
              },
            },
            // ImageWithCaption: {
            //   component: ImageWithCaption,
            // },
            // SpotifyEmbed: {
            //   component: SpotifyEmbed,
            // },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default MarkdownWrapper;
