import styles from './roadmapItem.module.scss';

const RoadmapItem = ({ date, importance, version, content }) => {
  return (
    <article className={styles['wrapper']}>
      <h2 className={styles['heading']}>
        {date} — {importance} — {version}
      </h2>
      <p className={styles['content']}>{content}</p>
    </article>
  );
};

export default RoadmapItem;
