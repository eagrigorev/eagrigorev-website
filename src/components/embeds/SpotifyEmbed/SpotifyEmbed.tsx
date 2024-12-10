/* Global */
import React from 'react';

/* Style */
import styles from './SpotifyEmbed.module.scss';

type Props = {
  src: string;
  layout: 'big' | 'small';
};

const SpotifyEmbed: React.FunctionComponent<Props> = ({ src, layout }) => {
  const height = layout === 'big' ? '352' : '152';
  return (
    <iframe
      className={styles['wrapper']}
      style={{ borderRadius: '12px' }}
      src={src}
      width="100%"
      height={height}
      frameBorder="0"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyEmbed;
