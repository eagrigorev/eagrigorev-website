import styles from './imageSingle.module.scss';
import Image from 'next/image';

const ImageSingle = ({ src, alt, description, type }) => {
  const classList = `${styles['image-container']} ${
    type === 'wide'
      ? styles['image-container--wide']
      : type === 'half-left'
        ? styles['image-container--left']
        : type === 'half-right'
          ? styles['image-container--right']
          : ''
  }`;
  return (
    <div className={classList}>
      <div className={styles['wrapper']}>
        <Image
          className={styles['image']}
          src={`/images/${src}`}
          width={900}
          height={900}
          alt={alt}
        />
        <p className={styles['description']}>{description}</p>
      </div>
    </div>
  );
};

export default ImageSingle;