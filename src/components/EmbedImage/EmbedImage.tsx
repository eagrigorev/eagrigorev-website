/* Global */
import React from 'react';

/* Components */
import Image from 'next/image';

/* Style */
import styles from './EmbedImage.module.scss';

type Props = {
  layout: 'wide' | 'left' | 'right';
  src: string;
  alt: string;
  caption: string;
};

const EmbedImage: React.FunctionComponent<Props> = ({
  layout,
  src,
  alt,
  caption,
}) => {
  return (
    <div className={`${styles['wrapper']} ${styles[`layout--${layout}`]}`}>
      <Image
        className={styles['image']}
        alt={alt}
        src={`/images/${src}`}
        width={920}
        height={920}
      />
      <p className={`paragraph--light-s ${styles['caption']}`}>{caption}</p>
    </div>
  );
};

export default EmbedImage;
