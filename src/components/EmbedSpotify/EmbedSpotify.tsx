/* Global */
import React from 'react';

/* Style */
import styles from './EmbedSpotify.module.scss';

type Props = {
  src: string;
};

const EmbedSpotify: React.FunctionComponent<Props> = ({ src }) => {
  return (
    <iframe
      className={styles['wrapper']}
      style={{ borderRadius: '12px' }}
      src={src}
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default EmbedSpotify;
