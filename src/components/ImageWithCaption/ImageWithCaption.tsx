/* Namespaces */
import React from 'react';

/* Components */
import Image from 'next/image';

/* Utils */
import styles from './ImageWithCaption.module.scss';
import { ImageLayout } from '@/utils/types';

type Props = {
  src: string;
  alt: string;
  caption: string;
  layout: ImageLayout;
};

const ImageWithCaption: React.FunctionComponent<Props> = ({
  src,
  alt,
  caption,
  layout,
}) => {
  const imageLayout = `layout--${layout}`;
  return (
    <div className={styles[imageLayout]}>
      <Image
        className={styles['image']}
        alt={alt}
        src={`/images/${src}`}
        width={920}
        height={920}
      />
      <p className="paragraph--caption">{caption}</p>
    </div>
  );
};

export default ImageWithCaption;
