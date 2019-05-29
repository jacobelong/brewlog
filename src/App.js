import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

function App() {
  return (
    <div className="App container max-w-full">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
