import React, { Component } from 'react'

import tw from 'tailwind.macro'
import css from '@emotion/css/macro'
import styled from '@emotion/styled/macro'
/** @jsx jsx */
import { jsx } from '@emotion/core'
  
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
      <nav css={tw`flex items-center justify-between flex-wrap p-6 shadow-sm bg-white border border-b-1 border-gray-300`}>
        {/* Logo */}
        <div css={tw`flex items-center flex-shrink-0 text-gray-800 mr-6`}>
          <i css={tw`fill-current mr-w mr-2`} className="fas fa-beer"></i>
          <span css={tw`font-semibold text-xl tracking-tight`}>BrewLog</span>
        </div>
        {/* Mobile Menu Icon */}
        <div css={tw`block lg:hidden`}>
          <button css={tw`flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white`}>
            <svg css={tw`fill-current h-3 w-3`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        {/* Nav */}
        <div css={tw`w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div css={tw`text-sm lg:flex-grow`}>
            <a href="#responsive-header" css={tw`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4`}>
              Docs
            </a>
            <a href="#responsive-header" css={tw`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4`}>
              Examples
            </a>
            <a href="#responsive-header" css={tw`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white`}>
              Blog
            </a>
          </div>
          {/* Download button */}
          <div>
            <a href="/download" css={tw`inline-block text-sm px-5 py-3 leading-none border rounded mt-4 text-gray-800 border-gray-400 hover:border-transparent hover:text-blue-500 hover:bg-blue-100 lg:mt-0`}>Download</a>
          </div>
        </div>
      </nav>
    );
  }
}