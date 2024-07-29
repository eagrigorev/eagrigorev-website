/* Namespaces */
import React from 'react';

/* Utils */
import styles from './SpotifyEmbed.module.scss';
import { SpotifyLayout } from '@/types/layout';

type Props = {
  src: string;
  layout: SpotifyLayout;
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
