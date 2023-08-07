import styles from './styles.module.css';
import Image from 'next/image';
import FeaturedImage1 from '../../../public/images/featured/grid-item-1.jpg';
import FeaturedImage2 from '../../../public/images/featured/grid-item-2.jpg';
import FeaturedImage3 from '../../../public/images/featured/grid-item-3.jpg';
import FeaturedImage4 from '../../../public/images/featured/grid-item-4.jpg';
import FeaturedImage5 from '../../../public/images/featured/grid-item-5.jpg';
import FeaturedImage6 from '../../../public/images/featured/grid-item-6.jpg';

const FeaturedImages = () => {
  return (
    <section className={styles.container}>
      <header>
        <h1 className={styles.intro}>
          Instead of tightening our grip by loading up on breakpoints, we can
          let go, embracing the ebb and flow with a more fluid and systematic
          approach.
        </h1>
      </header>
      <div className={styles.images}>
        <Image
          src={FeaturedImage1}
          alt=""
          width={360}
          height={360}
          key="image1"
        />
        <Image
          src={FeaturedImage2}
          alt=""
          width={360}
          height={360}
          key="image2"
        />
        <Image
          src={FeaturedImage3}
          alt=""
          width={360}
          height={360}
          key="image3"
        />
        <Image
          src={FeaturedImage4}
          alt=""
          width={360}
          height={360}
          key="image4"
        />
        <Image
          src={FeaturedImage5}
          alt=""
          width={360}
          height={360}
          key="image5"
        />
        <Image
          src={FeaturedImage6}
          alt=""
          width={360}
          height={360}
          key="image6"
        />
      </div>
    </section>
  );
};

export default FeaturedImages;
