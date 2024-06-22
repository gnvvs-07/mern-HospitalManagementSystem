import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/images/logo.png"; // Replace with your logo path

export default function Footer() {
  return (
    <footer className="py-10 px-5">
      <div className="flex flex-wrap justify-between">
        {/* Logo and description */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <img src={logo} alt="Logo" className="h-10 mb-4" />
          <p className="text-sm text-gray-500">
            Providing quality medical services and care for all our patients.
            Your health is our priority.
          </p>
          {/* Social Media Links */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mt-[30px]">
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex gap-5">
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-yellow-500 transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-yellow-500 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-yellow-500 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-300 hover:text-yellow-500 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        {/* Quick Links */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 lg:mb-0">
          <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
          <ul className=" text-textColor">
            <li className="mb-2">
              <a
                href="/"
                className="hover:text-yellow-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/about"
                className="hover:text-yellow-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/contact"
                className="hover:text-yellow-500 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/services"
                className="hover:text-yellow-500 transition duration-300"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; 2024 Medicare. All rights reserved.</p>
      </div>
    </footer>
  );
}
