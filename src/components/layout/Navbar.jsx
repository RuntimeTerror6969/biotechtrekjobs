import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Job Portal
          </Link>
          <div className="flex items-center gap-6">
            {user ? (
              <>
                <Link to="/jobs" className="hover:text-blue-500">
                  Browse Jobs
                </Link>
                <Link to="/applications" className="hover:text-blue-500">
                  My Applications
                </Link>
                <Link to="/profile" className="hover:text-blue-500">
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-4">
                <Link
                  to="/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="border border-blue-500 text-blue-500 px-4 py-2 rounded"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
