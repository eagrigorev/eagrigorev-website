import { STATIC_HEADLINES } from '../utils/const';
import Headline from './components/headline';
import FeaturedImages from './components/featuredImages';

const Home = () => {
  return (
    <section>
      <Headline
        title={STATIC_HEADLINES.index.title}
        subtitle={STATIC_HEADLINES.index.subtitle}
      />
      <FeaturedImages />
    </section>
  );
};

export default Home;
