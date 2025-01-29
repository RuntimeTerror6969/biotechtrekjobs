import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react"; // Using lucide-react icons
import logo from "../../assets/biotechtreklogo.jpg"; // Your logo path
import darkLogo from "../../assets/btt white logo.png"; // Your dark mode logo path

const Navbar = () => {
  const { user, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const isAdmin = user?.role === "admin";

  return (
    <nav
      className={`bg-white ${
        darkMode ? "dark:bg-gray-800" : ""
      } shadow-lg fixed w-full transition-colors duration-200 border-2 border-yellow-500`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Menu button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Centered Logo */}
          <div className="flex-1 flex justify-center">
            <Link
              to="/"
              className="text-xl font-bold flex items-center gap-4 dark:text-white"
            >
              <img
                src={darkMode ? darkLogo : logo}
                alt="BioTechTrek"
                className="h-16 w-auto" // Slightly larger (h-14 instead of h-12)
              />
            </Link>
          </div>

          {/* Right section with links */}
          <div className="flex items-center gap-6">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {user ? (
              <>
                {isAdmin && (
                  <Link
                    to="/post-job"
                    className="hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
                  >
                    Add Jobs
                  </Link>
                )}
                <Link
                  to="/jobs"
                  className="hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
                >
                  Browse Jobs
                </Link>
                <Link
                  to="/applications"
                  className="hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
                >
                  My Applications
                </Link>
                <Link
                  to="/profile"
                  className="hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-4">
                <Link
                  to="/login"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 px-4 py-2 rounded transition-colors duration-200"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              >
                Home
              </Link>
              <Link
                to="/jobs"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              >
                Browse Jobs
              </Link>
              <Link
                to="/applications"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              >
                My Applications
              </Link>
              <Link
                to="/profile"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              >
                Profile
              </Link>
              {isAdmin && (
                <Link
                  to="/add-jobs"
                  className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                >
                  Add Jobs
                </Link>
              )}
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
