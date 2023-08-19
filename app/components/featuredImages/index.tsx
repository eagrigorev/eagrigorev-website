import styles from './styles.module.css';
import Image from 'next/image';
import FeaturedImage1 from '../../../public/images/featured/featured-image-1.jpg';
import FeaturedImage2 from '../../../public/images/featured/featured-image-2.jpg';
import FeaturedImage3 from '../../../public/images/featured/featured-image-3.jpg';
import FeaturedImage4 from '../../../public/images/featured/featured-image-4.jpg';
import FeaturedImage5 from '../../../public/images/featured/featured-image-5.jpg';
import FeaturedImage6 from '../../../public/images/featured/featured-image-6.jpg';
import FeaturedImage7 from '../../../public/images/featured/featured-image-7.jpg';
import FeaturedImage8 from '../../../public/images/featured/featured-image-8.jpg';

const FeaturedImages = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={FeaturedImage1} alt="image1" />
      <Image className={styles.image} src={FeaturedImage2} alt="image2" />
      <Image className={styles.image} src={FeaturedImage3} alt="image3" />
      <Image className={styles.image} src={FeaturedImage4} alt="image4" />
      <Image className={styles.image} src={FeaturedImage5} alt="image5" />
      <Image className={styles.image} src={FeaturedImage6} alt="image6" />
      <Image className={styles.image} src={FeaturedImage7} alt="image7" />
      <Image className={styles.image} src={FeaturedImage8} alt="image8" />
    </div>
  );
};

export default FeaturedImages;
