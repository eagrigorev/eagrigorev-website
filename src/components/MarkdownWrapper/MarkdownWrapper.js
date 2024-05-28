import styles from './MarkdownWrapper.module.scss';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import ImageWithCaption from '../ImageWithCaption/ImageWithCaption';
import SpotifyEmbed from '../SpotifyEmbed/SpotifyEmbed';

const MarkdownWrapper = ({ layout, content }) => {
  return (
    <Markdown
      options={{
        wrapper: React.Fragment,
        overrides: {
          p: {
            props: {
              className: `${layout ? styles[layout] : ''} paragraph--regular`,
            },
          },
          a: {
            props: {
              className: 'link--underline transition--border',
            },
          },
          h2: {
            props: {
              className: `${layout ? styles[layout] : ''} heading--h2`,
            },
          },
          h3: {
            props: {
              className: `${layout ? styles[layout] : ''} heading--h3`,
            },
          },
          h4: {
            props: {
              className: `${layout ? styles[layout] : ''} heading--h4`,
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
