import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 py-6 ">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl font-bold tracking-tight text-white">
          <Link to="/">MernHolidays.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/signin"
            className="flex items-center text-blue-600 px-3 font-bold  bg-white hover:bg-gray-100 hover:text-green-500"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};
export default Header;
