import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import About from './About';
import Portfolio from './Portfolio';
import Mobile from './Mobile';
import WebFont from 'webfontloader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
WebFont.load({
  google: {
    families: ['Satisfy', 'cursive', 'Andika', 'sans-serif', 'Lato', 'Montserrat']
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Body} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Mobile/>
        </div>
      </Router>
    );
  }
}

export default App;
