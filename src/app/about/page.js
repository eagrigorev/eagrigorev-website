import { getPage } from '@/scripts/getMarkdown';
import SinglePageSplitTemplate from '@/templates/SinglePageSplitTemplate/SinglePageSplitTemplate';

const About = () => {
  const page = getPage('about.mdx');
  return (
    <SinglePageSplitTemplate
      showSeparator={true}
      showMeta={false}
      post={page}
      imageSrc="pages/evgenii-grigorev.jpg"
      imageAlt="Evgenii Grigorev"
      imageCaption="Image by Svetlana Krestiantseva"
      imageLayout="left-split"
    />
  );
};

export default About;
