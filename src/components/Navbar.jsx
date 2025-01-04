import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-black bg-opacity-70 backdrop-blur-sm z-20">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-white text-2xl font-bold">Passport Office</h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <ul
          className={`lg:flex space-x-4 text-white ${isMobileMenuOpen ? "block" : "hidden"} lg:block`}
        >
          <li>
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-300 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/help" className="hover:text-gray-300 transition">
              Help
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
