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
      <div className={this.state.isActive ? 'Header expanded' : 'Header'} >
        <div className="NavBar">
          <div className="NavBar-HeaderBar">
            <div className="Logo">
              <a href="/" className="Logo"><i className="fas fa-beer"></i></a>
            </div>

            <div className="SiteTitle"><a href="/">BrewLog</a></div>

            <div className="NavBar-Toggle-Container">
              <button className="NavBar-Toggle" onClick={this.showHideMenu}>
                <i className={this.state.isActive ? 'fas fa-times': 'fas fa-bars'}></i>
              </button>
            </div>
          </div>

          <div className={this.state.isActive ? 'NavMenu expanded' : 'NavMenu'} >
            <div className="Grid">
              <div className="Menu">
                <ul className="Navigation-Column">
                  <li className="Navigation-Element Navigation-Element--primary"><a href="/brews">Brew Log</a></li>
                  <li className="Navigation-Element Navigation-Element--primary"><a href="/ramblings">Ramblings</a></li>
                  <li className="Navigation-Element Navigation-Element--primary"><a href="/about">About</a></li>
                </ul>
                <ul className="Navigation-Footer">
                  <li className="Navigation-Element Navigation-Element--secondary">
                    <a href="https://twitter.com/thehomebrewfool">Twitter</a>
                  </li>
                  <li className="Navigation-Element Navigation-Element--secondary">
                    <a href="https://instagram.com/thehomebrewfool">Instagram</a>
                  </li>
                  <li className="Navigation-Element Navigation-Element--secondary">
                    <a href="/login">Log In</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}