
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm mb-6">
          Questions? Call{" "}
          <a href="tel:+1-800-000-0000" className="underline">
            1-800-000-0000
          </a>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Investor Relations
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Speed Test
              </a>
            </li>
          </ul>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Cookie Preferences
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Legal Notices
              </a>
            </li>
          </ul>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Account
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Ways to Watch
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Corporate Information
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Only on Netflix
              </a>
            </li>
          </ul>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Media Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6 text-center">
          <button className="border border-gray-600 text-gray-400 px-4 py-2 text-sm rounded hover:bg-gray-700">
            English
          </button>
        </div>
        <p className="text-center text-sm mt-4">
          © {new Date().getFullYear()} Netflix, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
