import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nom */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            NANA MARC
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              À propos
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Projets
            </Link>
            <Link
              to="/skills"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Compétences
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Accueil
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              À propos
            </Link>
            <Link
              to="/projects"
              onClick={toggleMenu}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Projets
            </Link>
            <Link
              to="/skills"
              onClick={toggleMenu}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Compétences
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
