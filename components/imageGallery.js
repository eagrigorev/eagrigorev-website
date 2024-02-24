import styles from './imageGallery.module.scss';
import Image from 'next/image';

const ImageGallery = ({ images }) => {
  return (
    <div className={styles['images']}>
      {images.map((image) => (
        <div key={image.src}>
          <Image
            className={styles['image']}
            src={`/images/${image.src}`}
            alt={image.description}
            width={716}
            height={716}
          />
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
