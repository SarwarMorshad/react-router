import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "2px solid red",
    padding: "5px",
    borderRadius: "15px",
  };
  return (
    <div style={userStyle}>
      <h2>Name: {name}</h2>
      <p>Email: {email} </p>
      {/* <p>{phone ? `Phone Number:${phone}` : 'No Phone' }</p> */}
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>
        <button>User Details</button>
      </Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
