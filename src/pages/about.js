import { fetchData } from 'utils/fetchData';

const About = ({ contentData }) => {
  return <h1>About page</h1>;
};

export default About;

export const getStaticProps = async () => {
  fetchData('src/content/pages');
  return {
    props: {
      contentData,
    },
  };
};
