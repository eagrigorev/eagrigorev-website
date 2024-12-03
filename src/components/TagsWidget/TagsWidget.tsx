/* Global */
import React from 'react';

/* Components */
import TagItem from '@/components/TagItem/TagItem';

/* Style */
import styles from './TagsWidget.module.scss';

const TagsWidget: React.FunctionComponent<{}> = () => {
  const tag = { title: 'test', url: '/test' };
  return (
    <div className={styles['wrapper']}>
      <h4 className={`heading--h4 ${styles['heading']}`}>Tags</h4>
      <ul className={`tag ${styles['items']}`}>
        <li>
          <TagItem tagItem={tag} />
        </li>
        <li>
          <TagItem tagItem={tag} />
        </li>
        <li>
          <TagItem tagItem={tag} />
        </li>
        <li>
          <TagItem tagItem={tag} />
        </li>
        <li>
          <TagItem tagItem={tag} />
        </li>
        <li>
          <TagItem tagItem={tag} />
        </li>
        <li>
          <TagItem tagItem={tag} />
        </li>
        <li>
          <TagItem tagItem={tag} />
        </li>
        <li>
          <TagItem tagItem={tag} />
        </li>
        <li>
          <TagItem tagItem={tag} />
        </li>
        <li>
          <TagItem tagItem={tag} />
        </li>
        <li>
          <TagItem tagItem={tag} />
        </li>
        <li>
          <TagItem tagItem={tag} />
        </li>
      </ul>
    </div>
  );
};

export default TagsWidget;
