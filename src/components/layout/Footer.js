import React from 'react';

const Footer = () => (
  <footer className="border-t border-gray-300 py-8 text-xs text-gray-500 text-center">
    &copy; The Homebrew Fool &nbsp;&middot;&nbsp; Brewed with <i className="fas fa-heart text-red-500"></i> in Indianapolis & Nashville

    <div className="float-right text-sm mr-8">
      <a
        href="https://github.com/jacobelong/brewlog"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-800 text-base"
      ><i className="fab fa-github"></i></a>
    </div>
  </footer>
);

export default Footer;