import styles from './contentWide.module.scss';
import MdxWrapper from '../mdxWrapper/mdxWrapper';
import ImageSingle from '../imageSingle/imageSingle';

const ContentWide = ({ image, alt, description, content }) => {
  return (
    <section className={`${styles['wrapper']} grid`}>
      <ImageSingle
        src={image}
        alt={alt}
        description={description}
        type="wide-half"
      />
      <div className={styles['content']}>
        <MdxWrapper content={content} />
      </div>
    </section>
  );
};

export default ContentWide;
