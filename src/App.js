import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{height: 65 + 'px'}}></div>
      <Container />
      <Footer />
    </div>
  );
}

export default App;
