import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun, Menu, X, User } from "lucide-react";
import logo from "../../assets/biotechtreklogo.jpg";
import darkLogo from "../../assets/btt white logo.png";
import { BriefcaseBusiness } from "lucide-react";

const Navbar = () => {
  const { user } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const isAdmin = user?.role === "admin";

  // Function to close the menu
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`bg-white ${darkMode ? "dark:bg-gray-800" : ""} shadow-lg fixed w-full transition-colors duration-200 border-2 border-yellow-500`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-24"> {/* Increased height for better visibility */}
          {/* Left Section - Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" // Increased padding
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />} {/* Increased icon size */}
            </button>
          </div>

          {/* Center Section - Logo */}
          <div className="flex-1 flex justify-center items-center">
            <Link to="/" className="text-4xl font-bold"> {/* Increased font size */}
              <img 
                src={darkMode ? darkLogo : logo} 
                alt="BioTechTrek" 
                className="h-20 w-auto sm:w-64 md:w-72 lg:w-80" // Increased logo size
              />
            </Link>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex items-center gap-6 text-xl"> {/* Increased text size and adjusted gap */}
            {user ? (
              <>
                {isAdmin && (
                  <Link
                    to="/post-job"
                    className="hidden md:flex hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
                    onClick={closeMenu} // Close menu on click
                  >
                    Add Jobs
                  </Link>
                )}

                <Link
                  to="/jobs"
                  className="hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 flex items-center gap-2"
                  onClick={closeMenu} // Close menu on click
                >
                  <span className="hidden md:inline">Jobs</span>
                </Link>

                <Link
                  to="/applications"
                  className="hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 flex items-center gap-2"
                  onClick={closeMenu} // Close menu on click
                >
                  <BriefcaseBusiness className="w-7 h-7 md:hidden" /> {/* Increased icon size */}
                  <span className="hidden md:inline">Applications</span>
                </Link>

                <Link
                  to="/profile"
                  className="hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 p-2"
                  onClick={closeMenu} // Close menu on click
                >
                  <User className="w-7 h-7" /> {/* Increased icon size */}
                </Link>
            
                <button
                  onClick={toggleDarkMode}
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <Sun className="w-7 h-7 text-yellow-500" /> 
                  ) : (
                    <Moon className="w-7 h-7 text-gray-600" />
                  )}
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-xl rounded-lg transition-colors duration-200"
                onClick={closeMenu} // Close menu on click
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50">
          <div className="px-6 py-6 space-y-5"> {/* Increased spacing */}
            <Link
              to="/"
              className="block px-4 py-3 text-lg rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              onClick={closeMenu} // Close menu on click
            >
              Home
            </Link>
            <Link
              to="/jobs"
              className="block px-4 py-3 text-lg rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              onClick={closeMenu} // Close menu on click
            >
              Browse Jobs
            </Link>
            <Link
              to="/applications"
              className="block px-4 py-3 text-lg rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              onClick={closeMenu} // Close menu on click
            >
              My Applications
            </Link>
            <Link
              to="/profile"
              className="block px-4 py-3 text-lg rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              onClick={closeMenu} // Close menu on click
            >
              Profile
            </Link>
            {isAdmin && (
              <Link
                to="/post-job"
                className="block px-4 py-3 text-lg rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                onClick={closeMenu} // Close menu on click
              >
                Add Jobs
              </Link>
            )}
            <Link
              to="/about"
              className="block px-4 py-3 text-lg rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              onClick={closeMenu} // Close menu on click
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3 text-lg rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              onClick={closeMenu} // Close menu on click
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
