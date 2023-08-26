import styles from './styles.module.css';
import Image from 'next/image';

const ImageWithCaption = ({ image, type, title }) => {
  return (
    <>
      <Image
        className={styles.image}
        src={`/images/${type}/${image.src}`}
        alt={`${title}`}
        width={768}
        height={768}
      />
      <p className="caption">Temporary caption</p>
    </>
  );
};

export default ImageWithCaption;
