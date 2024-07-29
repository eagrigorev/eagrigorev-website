/* Namespaces */
import React from 'react';

/* Components */
import ImageWithCaption from '../ImageWithCaption/ImageWithCaption';
import Markdown from 'markdown-to-jsx';
import SpotifyEmbed from '../SpotifyEmbed/SpotifyEmbed';

/* Utils */
import styles from './MarkdownWrapper.module.scss';
import { PostLayout } from '@/types/layout';

type Props = {
  layout?: PostLayout;
  content: string;
};

const MarkdownWrapper: React.FunctionComponent<Props> = ({
  layout,
  content,
}) => {
  return (
    <Markdown
      options={{
        wrapper: React.Fragment,
        overrides: {
          p: {
            props: {
              className: `${layout === 'narrow' ? styles[`content--${layout}`] : ''} paragraph--regular`,
            },
          },
          a: {
            props: {
              className: 'link--underline transition--border',
            },
          },
          h2: {
            props: {
              className: `${layout ? styles[`content--${layout}`] : ''} heading--h2`,
            },
          },
          h3: {
            props: {
              className: `${layout ? styles[`content--${layout}`] : ''} heading--h3`,
            },
          },
          h4: {
            props: {
              className: `${layout ? styles[`content--${layout}`] : ''} heading--h4`,
            },
          },
          ImageWithCaption: {
            component: ImageWithCaption,
          },
          SpotifyEmbed: {
            component: SpotifyEmbed,
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownWrapper;
