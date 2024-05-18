import styles from './LoadMoreButton.module.scss';

const LoadMoreButton = () => {
  return (
    <div className={styles['wrapper']}>
      <button className={`${styles['button']} button-text`}>Load More</button>
    </div>
  );
};

export default LoadMoreButton;
