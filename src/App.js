import React from 'react';

import emotionReset from 'emotion-reset';
import { Global } from '@emotion/core';
import tw from 'tailwind.macro'
import styled from '@emotion/styled/macro'
import css from '@emotion/css/macro'
/** @jsx jsx */
import { jsx } from '@emotion/core'

import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

function App() {
  return (
    <div>
      <Global styles={css`
        ${emotionReset}
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
      `} />
      <div css={tw`container max-w-full`} className="App">
        <Header />
        <Container />
        <Footer />
      </div>
    </div>
  );
}

export default App;
