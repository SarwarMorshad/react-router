import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h2>Details about users</h2>
      <h3>Name: {name}</h3>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;
