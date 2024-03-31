/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Customer = ({ user }) => {
  return (
    <>
        <li className="text-4xl" key={user.name}>
      
        <Link to={`customer/${user._id}`}>{user.name}</Link>
        </li>

    
    </>
  );
};

export default Customer;
