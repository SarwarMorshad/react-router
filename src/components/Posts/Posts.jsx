import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div>
      <h2>Posts</h2>
      <div className="posts">
        {posts.map((post, idx) => (
          <Post key={idx} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
