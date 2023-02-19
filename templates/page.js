import { marked } from 'marked';

const Page = ({ props }) => {
  return (
    <>
      <h2>{props.meta.title}</h2>
      <p>Posted on {props.meta.datePosted}</p>
      <div dangerouslySetInnerHTML={{ __html: marked(props.content) }}></div>
    </>
  );
};

export default Page;
