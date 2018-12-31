import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Amatic SC', 'cursive', 'Andika', 'sans-serif']
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
