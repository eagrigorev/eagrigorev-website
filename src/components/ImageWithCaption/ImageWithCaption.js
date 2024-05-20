import styles from './ImageWithCaption.module.scss';
import Image from 'next/image';

const ImageWithCaption = ({ src, alt, caption, layout }) => {
  return (
    <div className={styles[layout]}>
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
