/** @jsx jsx */
import React, { Component } from 'react';
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
  
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
      <nav css={tw`flex items-center justify-between flex-wrap bg-teal-500 p-6`}>
        <div css={tw`flex items-center flex-shrink-0 text-white mr-6`}>
          <i className="fas fa-beer" css={tw`fill-current mr-w mr-2`}></i>
          <span css={tw`font-bold text-xl tracking-tight`}>BrewLog</span>
        </div>
        <div css={tw`block lg:hidden`}>
          <button css={tw`flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white`}>
            <svg css={tw`fill-current h-3 w-3`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
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
          <div>
            <a href="/download" css={tw`inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white border-solid hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0`}>Download</a>
          </div>
        </div>
      </nav>
    );
  }
}