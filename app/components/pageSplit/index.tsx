import styles from './styles.module.css';
import Markdown from 'markdown-to-jsx';
import Headline from '../headline';
import ImageWithCaption from '../imageWithCaption';
import { SpacerParagraph, SpacerHeading } from '../mdx';

const PageSplit = ({ markdown }) => {
  return (
    <section>
      <Headline title={markdown.meta.title} subtitle={markdown.meta.excerpt} />
      <div className={styles.container}>
        <div className={styles.left}>
          {markdown.meta.images.map((image) => (
            <div className={styles.image} key={markdown.meta.slug}>
              <ImageWithCaption
                image={image}
                type={markdown.meta.type}
                title={markdown.meta.title}
              />
            </div>
          ))}
        </div>
        <div className={styles.right}>
          <Markdown
            options={{
              overrides: {
                SpacerParagraph: { component: SpacerParagraph },
                SpacerHeading: { component: SpacerHeading },
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
