import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav';
import User from '../auth/User';
  
export default class Header extends Component {
  state = {

  };

  render() {
    return (
      <header className="flex items-center justify-between flex-wrap px-8 shadow-sm bg-white border-b border-gray-300">
        <Link to="/"><i className="fas fa-beer text-gray-800 text-3xl mr-w mr-2"></i></Link>      
        <Nav />
        <User username="Jake" />
      </header>
    );
  }
}