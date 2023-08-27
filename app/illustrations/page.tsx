import { MdxPath } from '../../utils/interfaces';
import { STATIC_HEADLINES } from '../../utils/const';
import Headline from '../components/headline';
import PortfolioGrid from '../components/portfolioGrid';

const Illustrations = () => {
  return (
    <section>
      <Headline
        title={STATIC_HEADLINES.illustrations.title}
        subtitle={STATIC_HEADLINES.illustrations.subtitle}
      />
      <PortfolioGrid category={MdxPath.illustrations} slug="illustrations" />
    </section>
  );
};

export default Illustrations;
