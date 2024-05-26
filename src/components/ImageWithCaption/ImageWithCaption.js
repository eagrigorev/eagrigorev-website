import styles from './ImageWithCaption.module.scss';
import Image from 'next/image';

const ImageWithCaption = ({ src, alt, caption, layout }) => {
  const imageLayout = `layout--${layout}`;
  return (
    <div className={styles[imageLayout]}>
      <Image
        className={styles['image']}
        alt={alt}
        src={`/images/featured/${src}`}
        width={920}
        height={920}
      />
      <p className="paragraph--caption">{caption}</p>
    </div>
  );
};

export default ImageWithCaption;
