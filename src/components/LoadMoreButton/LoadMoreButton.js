import styles from './LoadMoreButton.module.scss';

const LoadMoreButton = ({ clickHandler, buttonText }) => {
  return (
    <div className={styles['wrapper']}>
      <button
        className={`${styles['button']} button-text transition--opacity`}
        onClick={clickHandler}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default LoadMoreButton;
