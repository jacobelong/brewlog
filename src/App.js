import React, { Component } from 'react';

import Header from './components/layout/Header/';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

// Data Sources
import BrewLogData from './data/brewLogData';

export default class App extends Component {
  state = {
    userIsLoggedIn: false
  }

  componentWillMount() {
    this.getLoggedInState(BrewLogData.user.isLoggedIn);
  }

  getLoggedInState = (isLoggedIn) => {
    if (isLoggedIn) {
      this.setState({userIsLoggedIn: true})
    }
  }

  render() {
    return (
      <div className="App container max-w-full bg-gray-100">
        <Header
          user={BrewLogData.user.userInfo}
          isLoggedIn={this.state.userIsLoggedIn}
        />
        <Main appData={BrewLogData} />
        <Footer />
      </div>
    );
  }
}
