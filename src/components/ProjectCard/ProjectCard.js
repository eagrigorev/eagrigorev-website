import styles from './ProjectCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ projectMeta }) => {
  return (
    <article className={styles['wrapper']}>
      <Link href={projectMeta.slug}>
        <Image
          className={styles['image']}
          alt={projectMeta.title}
          src={`/images/projects/${projectMeta.slug}/${projectMeta.featuredImage}`}
          width={440}
          height={330}
        />
      </Link>
      <h3 className={`${styles['title']} paragraph--regular`}>
        {projectMeta.title}
      </h3>
    </article>
  );
};

export default ProjectCard;
