import React, { Component } from 'react'
import {
  NavLink,
  // Route,
  // Switch
} from 'react-router-dom'
  
export default class Nav extends Component {
  state = {
    navIsActive: ""
  }

  render() {
    const navClass = "flex mx-2 hover:text-blue-500 p-4 px-3 lg:mx-4";

    return (
      <div className="text-sm flex justify-between text-gray-800">
        <NavLink exact to="/" className={navClass}>Dashboard</NavLink>
        <NavLink to="/brews" className={navClass}>Brews</NavLink>
        <NavLink to="/recipes" className={navClass}>Recipes</NavLink>
        <NavLink to="/equipment" className={navClass}>Equipment</NavLink>
        <NavLink to="/wishlist" className={navClass}>Wishlist</NavLink>

        {/* <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div> */}
      </div>
    );
  }
}