import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhone } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10 px-6">
      {/* Newsletter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Subscribe to Newsletter</h2>
          <p className="text-gray-600">Subscribe to our newsletter and get exclusive insights, industry trends.</p>
        </div>

        <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="border-t border-gray-300 my-6" />

      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1 max-w-sm">
          <div className="mb-4">
            <img src="/logo2.png" alt="Logo" className="h-12 w-auto" />
          </div>
          <p className="text-gray-700 mb-4">
            The ultimate platform designed to turbocharge the IT sector in Pakistan
          </p>
          <div className="flex items-center text-gray-700 mb-4">
            <FaPhone className="mr-2" />
            +92 312 3023645
          </div>
          <div className="flex space-x-4 text-gray-600">
            <a href="https://www.facebook.com/p/Interneepk-100093222249320/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-green-500 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/company/internee-pk/?originalSu" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-green-500 transition-colors" />
            </a>
            <a href="https://www.instagram.com/internee.pk/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-green-500 transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-wrap gap-10">
          {/* Company Links */}
          <div className="min-w-[160px]">
            <h3 className="text-gray-800 font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#home" className="hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Instructors</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="min-w-[160px]">
            <h3 className="text-gray-800 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-green-500 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Video Guides</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Certification</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Scholarships</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 my-6" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <div className="mb-3 md:mb-0">
          &copy; 2025 internee.pk
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-green-500 transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
    );
}

export default Footer;
