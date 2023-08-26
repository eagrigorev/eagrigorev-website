import styles from './styles.module.css';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import Headline from '../headline';

import { SpacerM, SpacerL } from '../mdx';

const PageSplit = ({ markdown }) => {
  return (
    <section>
      <Headline title={markdown.meta.title} subtitle={markdown.meta.excerpt} />
      <div className={styles.container}>
        <div className={styles.left}>
          <Image
            className={styles.image}
            src={`/images/${markdown.meta.type}/${markdown.meta.featuredImage}`}
            alt={`${markdown.meta.title}}`}
            width={768}
            height={768}
          />
        </div>
        <div className={styles.right}>
          <Markdown
            options={{
              overrides: {
                SpacerM: { component: SpacerM },
                SpacerL: { component: SpacerL },
              },
            }}
          >
            {markdown.content}
          </Markdown>
        </div>
      </div>
    </section>
  );
};

export default PageSplit;
