import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2026 Marc. Tous droits réservés.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/NANA-MARC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/marc-nana-93349838a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:nanamarc5547@gmail.com"
              className="text-gray-400 hover:text-white transition"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
