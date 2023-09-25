import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div>
      <h2>Details about ID : {id}</h2>
      <p>Title: {title}</p>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
