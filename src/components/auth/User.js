import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {
  state = {
    isLoggedIn: false,
  };

  render() {
    return (
      <div>
        { this.state.isLoggedIn ?
        <button className="inline-block text-sm px-4 py-3 leading-none border rounded text-gray-800 border-gray-400 hover:border-gray-500 hover:text-gray-900">
          <span className="mr-2">{this.props.username}</span>
          <i className="fas fa-angle-down"></i>
        </button>
        :
        <Link to="/setup" className="btn btn-primary">
          <span className="mr-2">Setup</span>
          <i className="fas fa-cog slow-spin"></i>
        </Link>
        }
      </div>
    );
  }
}
