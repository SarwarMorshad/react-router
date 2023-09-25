import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  //   console.log(post);
  const { id, title, body } = post;
  const navigate = useNavigate();
  const userStyle = {
    border: "2px solid red",
    padding: "5px",
    borderRadius: "15px",
  };

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={userStyle}>
      <h4>Post of Id: {id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <button onClick={handleShowDetail}>Click to show Details</button>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
  id: PropTypes.object,
  body: PropTypes.string,
};

export default Post;
