import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun, Menu, X, User } from "lucide-react";
import logo from "../../assets/biotechtreklogo.jpg";
import darkLogo from "../../assets/btt white logo.png";
import { BriefcaseBusiness } from "lucide-react";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const { user } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const isAdmin = user?.role === "admin";
  const closeMenu = () => setIsOpen(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className={`bg-white ${darkMode ? "dark:bg-gray-800" : ""} shadow-lg fixed w-full z-50 transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-1 md:px-4">
        {/* Main Navbar Content */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left Section - Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 md:p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} className="md:w-7 md:h-7 lg:h-9 w-9" /> : <Menu size={26} className="md:w-7 md:h-7 lg:h-9 w-9" />}
          </button>

          {/* Center Section - Logo */}
         
<div className="flex items-center md:justify-center">
<Link to="/" className="px-1 pt-2 md:px-4">
  <img 
    src={darkMode ? darkLogo : logo} 
    alt="BioTechTrek" 
    className={`h-12 w-22 md:h-16 md:w-36 ${darkMode ? "h-28 w-18 pb-2 lg:h-28 lg:w-80" : "lg:h-16 lg:w-72"}`}
  />
</Link>

</div>

{/* Right Section - Actions */}
<div className="flex items-center gap-1.5 md:gap-3 shrink-0">
  {user ? (
    <>
      <Link
        to="/profile"
        className="md:p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
        aria-label="Profile"
      >
        <User className=" w-7 h-7 md:w-7 md:h-7 lg:w-9 h-9" />
      </Link>
      <button
        onClick={toggleDarkMode}
        className="p-1.5 md:p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="w-7 h-7 md:w-7 md:h-7 text-yellow-500" />
        ) : (
          <Moon className="w-7 h-7 md:w-7 md:h-7 text-gray-600" />
        )}
      </button>
    </>
  ) : (
    <Link
      to="/auth"
      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 md:px-6 md:py-3 rounded-md text-sm md:text-lg font-medium"
      onClick={closeMenu}
    >
      Login
    </Link>
  )}
</div>
        </div>

        {/* Mobile Menu - Slides down when open */}
        <div
          className={`${
            isOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="py-1.5 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-l rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200"
              onClick={closeMenu}
            >
              Home
            </Link>
            
            <Link
              to="/jobs"
              className="block px-3 py-2 text-l rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200"
              onClick={closeMenu}
            >
              Browse Jobs
            </Link>

            {user && (
              <>
                {isAdmin ? (
                  <Link
                    to="/post-job"
                    className="block px-3 py-2 text-l rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200"
                    onClick={closeMenu}
                  >
                    <div className="flex items-center gap-1.5">
                      <BriefcaseBusiness className="w-5 h-5" />
                      <span>Post Job</span>
                    </div>
                  </Link>
                ) : (
                  <Link
                    to="/applications"
                    className="block px-3 py-2 text-l rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200"
                    onClick={closeMenu}
                  >
                    <div className="flex items-center gap-1.5">
                      {/* <BriefcaseBusiness className="w-4 h-4" /> */}
                      <span>My Applications</span>
                    </div>
                  </Link>
                )}

                <Link
                  to="/about"
                  className="block px-3 py-2 text-l rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200"
                  onClick={closeMenu}
                >
                  About Us
                </Link>

                <button onClick={openModal} className="block px-3 py-2 text-l rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200">
                  Support
                </button>

                {/* <Link
                  to="/contact"
                  className="block px-3 py-2 text-l rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link> */}
              </>
            )}
             <ContactModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;