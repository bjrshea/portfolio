import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import About from './About';
import Portfolio from './Portfolio';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
WebFont.load({
  google: {
    families: ['Amatic SC', 'cursive', 'Andika', 'sans-serif']
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Body} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
