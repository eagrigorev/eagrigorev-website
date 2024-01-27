import styles from './roadmap.module.scss';

import PageTitle from '@/components/pageTitle';
import RoadmapItem from '@/components/roadmapItem';

const DevelopmentRoadmap = () => {
  return (
    <main className={`${styles['wrapper']} container`}>
      <PageTitle />
      <div className="grid">
        <RoadmapItem
          date="January 27, 2024"
          importance="Major release"
          version="v2.0.0"
          content="Full redesign started. Added starting home and roadmap pages."
        />
        <RoadmapItem
          date="August 28, 2023"
          importance="Major release"
          version="v1.1.0"
          content="Illustrations portfolio is launched."
        />
      </div>
    </main>
  );
};

export default DevelopmentRoadmap;
