import React from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

import BrewLogData from './data/brewLogData';

function App() {
  console.log(BrewLogData);
  return (
    <div className="App container max-w-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
