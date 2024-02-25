import styles from './imageGallery.module.scss';
import Image from 'next/image';

const ImageGallery = ({ images }) => {
  return (
    <div className={styles['wrapper']}>
      {images.map((image) => (
        <ImageWithCaption
          key={image.src}
          src={image.src}
          description={image.description}
        />
      ))}
    </div>
  );
};

const ImageWithCaption = ({ src, description }) => {
  return (
    <div>
      <Image
        className={styles['image']}
        src={`/images/${src}`}
        width={716}
        height={716}
        alt={description}
      />
      <p className={styles['description']}>{description}</p>
    </div>
  );
};

export default ImageGallery;
