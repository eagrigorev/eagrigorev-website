import React from 'react';
import Markdown from 'markdown-to-jsx';

const MarkdownWrapper = ({ content }) => {
  return (
    <Markdown
      options={{
        wrapper: React.Fragment,
        overrides: {
          p: {
            props: {
              className: 'paragraph--regular',
            },
          },
          h2: {
            props: {
              className: 'heading--h2',
            },
          },
          h3: {
            props: {
              className: 'heading--h3',
            },
          },
          h4: {
            props: {
              className: 'heading--h4',
            },
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownWrapper;
