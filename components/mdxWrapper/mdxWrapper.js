import React from 'react';
import Markdown from 'markdown-to-jsx';
import ImageSingle from '@/components/imageSingle/imageSingle';

const MdxWrapper = ({ layout = '', content }) => {
  // Layout: 'content-narrow' | skippped for default or content-wide-split

  return (
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
              className: `${layout} paragraph paragraph--light-m-150`,
            },
          },
          h2: {
            props: {
              className: `${layout} heading heading--medium-2xl-125`,
            },
          },
          h3: {
            props: {
              className: `${layout} heading heading--medium-xl-125`,
            },
          },
          h4: {
            props: {
              className: `${layout} heading heading--medium-l-125`,
            },
          },
          h5: {
            props: {
              className: `${layout} heading heading--medium-m-125`,
            },
          },
          h6: {
            props: {
              className: `${layout} heading heading--medium-s-125`,
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
  );
};

export default MdxWrapper;
