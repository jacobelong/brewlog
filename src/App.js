import React, { Component } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

import BrewLogData from './data/brewLogData';

export default class App extends Component {
  state = {
    userIsLoggedIn: false
  }

  componentWillMount() {
    this.getLoggedInState(BrewLogData.user);
  }

  getLoggedInState = (user) => {
    if (user.isLoggedIn) {
      this.setState({userIsLoggedIn: true})
    }
  }

  render() {
    return (
      <div className="App container max-w-full bg-gray-100">
        <Header
          user={BrewLogData.user}
          isLoggedIn={this.state.userIsLoggedIn}
        />
        <Main appData={BrewLogData} />
        <Footer />
      </div>
    );
  }
}
