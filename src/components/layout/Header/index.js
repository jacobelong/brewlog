import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';
import UserMenu from './UserMenu';
  
const Header = props => {
  return (
    <header className="flex items-center justify-between flex-wrap px-8 shadow-sm bg-white border-b border-gray-300">
      <Link to="/"><i className="fas fa-beer text-gray-800 text-3xl mr-w mr-2"></i></Link>      
      <Nav />
      <UserMenu user={props.user} isLoggedIn={props.isLoggedIn} />
    </header>
  );
}

export default Header;