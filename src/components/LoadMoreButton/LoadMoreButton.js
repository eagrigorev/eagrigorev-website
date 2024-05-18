import styles from './LoadMoreButton.module.scss';

const LoadMoreButton = ({ clickHandler }) => {
  return (
    <div className={styles['wrapper']}>
      <button
        className={`${styles['button']} button-text`}
        onClick={clickHandler}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
