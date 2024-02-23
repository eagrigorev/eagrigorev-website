import styles from './imageGallery.module.scss';
import Image from 'next/image';

const ImageGallery = ({ images }) => {
  return (
    <div className={styles['images']}>
      {/* {images.map((image) => (
        <div key={image.src}>
          <Image
            // src={image.src}
            alt={image.description}
            width={200}
            height={200}
          />
          <p>{image.description}</p>
        </div>
      ))} */}
      img
    </div>
  );
};

export default ImageGallery;
