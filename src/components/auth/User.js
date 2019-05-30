import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showUserMenu: false,
    }
  }  

  handleClick = e => {
    let userMenu = document.getElementById('userMenu');
    if (this.node.contains(e.target)) {
      if (!userMenu.contains(e.target))
        this.setState({ showUserMenu: !this.state.showUserMenu })
    } else {
      this.setState({ showUserMenu: false })
    }
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  render() {
    const user = this.props.user;

    return (
      <div>
        { user.isLoggedIn ?
        <div className="relative" ref={node => this.node = node}>
          <button
            id="userMenuButton"
            className="inline-block text-sm px-4 py-3 leading-none border rounded text-gray-800 border-gray-400 hover:border-gray-500 hover:text-gray-900"
          >
            <span className="mr-2">{user.name}</span>
            <i className="fas fa-angle-down"></i>
          </button>

          <div id="userMenu" className={`absolute shadow-xl rounded p-4 right-0 w-64 border border-gray-400 mt-1 bg-white ${!this.state.showUserMenu ? "hidden" : ""}`}>
            <ul>
              <li><Link to="/user/profile">Profile</Link></li>
              <li><Link to="/user/brewery">Brewery</Link></li>
              <li><Link to="/auth/logout">Sign out</Link></li>
            </ul>
          </div>
        </div>
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
