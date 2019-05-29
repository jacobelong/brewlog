import React, { Component } from 'react';
  
export default class Header extends Component {

  state = {
    isActive: false
  }

  showHideMenu = () => {
    const currentState = this.state.isActive;
    this.setState({ isActive: !currentState });
  }

  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap p-6 shadow-sm bg-white border border-b-1 border-gray-300">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <i className="fas fa-beer fill-current mr-w mr-2"></i>
          <span className="font-semibold text-xl tracking-tight">BrewLog</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Docs
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Examples
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Blog
            </a>
          </div>
          <div>
            <a href="/download" className="btn btn-primary">Download</a>
          </div>
        </div>
      </nav>
    );
  }
}