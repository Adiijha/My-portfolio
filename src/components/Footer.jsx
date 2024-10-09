import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      {/* Social icons, visible only on mobile screens */}
      <div className="flex justify-center items-center gap-3 mb-3 sm:hidden">
        <a href="https://github.com/adiijha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://linkedin.com/in/adiikj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://instagram.com/adii_jha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faInstagram} size='2x' />
        </a>
        <a href="https://twitter.com/adii_kj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </a>
      </div>

      {/* Footer text and contact info */}
      <div className="container mx-auto px-6 text-center">
        <p>Email: <a href="mailto:adityakumarjha.276@gmai.com" className="hover:underline">adityakumarjha.276@gmail.com</a></p>
        <p>Phone: <a href="tel:+917827789970" className="hover:underline">+91 7827789970</a></p>
        <p>&copy; {new Date().getFullYear()} Made with ❤️ by Adii</p>
      </div>
    </footer>
  );
}
