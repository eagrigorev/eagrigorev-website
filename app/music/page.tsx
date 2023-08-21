import { Path } from '../../utils/interfaces';
import { STATIC_HEADLINES } from '../../utils/const';
import Headline from '../components/headline';
import PortfolioGrid from '../components/portfolioGrid';

const Music = () => {
  return (
    <section>
      <Headline
        title={STATIC_HEADLINES.music.title}
        subtitle={STATIC_HEADLINES.music.subtitle}
      />
      <PortfolioGrid category={Path.music} slug="music" />
    </section>
  );
};

export default Music;
