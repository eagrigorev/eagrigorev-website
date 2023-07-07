const Post = (props: any) => {
  const slug = props.params.slug;
  return <div>This is a post! {slug}</div>
}

export default Post;