import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-around">
      <h1 className="text-4xl underline underline-offset-2 text-fuchsia-600">
        Banking App
      </h1>
      <ul>
        <li className="text-2xl">
          <Link to={`/`}>All Customers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
