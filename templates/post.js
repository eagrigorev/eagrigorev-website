import { marked } from 'marked';

const Post = ({ props }) => {
  return (
    <>
      <h1>{props.meta.title}</h1>
      <p>Posted on {props.meta.datePosted}</p>
      <div dangerouslySetInnerHTML={{ __html: marked(props.content) }}></div>
      <div>Tags: {props.meta.tags}</div>
    </>
  );
};

export default Post;
