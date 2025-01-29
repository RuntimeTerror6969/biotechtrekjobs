import { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-gray-300">
                  Support
                </Link>
              </li>
              <li>
                <button onClick={openModal} className="hover:text-gray-300">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/company" className="hover:text-gray-300">
                  Company
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-gray-300">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-gray-300">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gray-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-gray-300">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us On</h3>
            <div className="flex space-x-4">
              {/* Telegram */}
              <a
                href="https://t.me/+4UvyPy_vcB1hNjU1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                  alt="Telegram"
                  className="w-6 h-6"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/biotechtrek?igsh=MXBrcmR6c2FkdXN1Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@biotechtrek?si=VMGFVkxPithB2pcd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/18DVtRU6v3/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/biotechtrek/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © 2025 BioTechTrek. All rights reserved.
          </p>
        </div>
      </div>

      {/* Render the Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </footer>
  );
};

export default Footer;
