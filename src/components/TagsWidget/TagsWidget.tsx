/* Global */
import React from 'react';

/* Components */
import TagItem from '@/components/TagItem/TagItem';

/* Scripts */
import { generateTagsCloud } from '@/scripts/generateTagsCloud';

/* Style */
import styles from './TagsWidget.module.scss';

const TagsWidget: React.FunctionComponent<{}> = () => {
  const tag = { title: 'test', url: '/test' };
  const tags = generateTagsCloud().slice(0, 10);
  return (
    <div className={styles['wrapper']}>
      <h4 className={`heading--h4 ${styles['heading']}`}>Tags</h4>
      <ul className={`paragraph--light-xs ${styles['items']}`}>
        {tags.map(
          (tag: string, index: number): React.JSX.Element => (
            <li key={index}>
              <TagItem tagItem={tag} />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TagsWidget;
