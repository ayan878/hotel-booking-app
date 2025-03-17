import { Link, useNavigate } from "react-router";
import { useAppContext } from "../context/AppContext";
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import signOutApi from "../api/signOutApi";

const Header = () => {
  const { isLoggedIn, showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      showToast({ message: "Logout Success", type: "SUCCESS" });
      navigate("/login"); // Redirect to login page
    },
    onError: (error: Error) => {
      showToast({ message: error.message || "Logout failed", type: "ERROR" });
    },
  });

  const handleLogout = () => {
    mutation.mutate(); // Call logout function
  };
  return (
    <div className="bg-blue-800 py-3">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white tracking-tight font-bold ">
          <Link to="/">MernHolidays.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link to="/my-bookings">My Bookings</Link>
              <Link to="/my-hotels">My Hotels</Link>
              <button onClick={handleLogout}>Sign Out</button>
            </>
          ) : (
            <Link
              to="/login"
              className="flex items-center bg-white text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
