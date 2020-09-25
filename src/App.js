import React from 'react';
import './App.scss';
import Home from './containers/Home/Home'
import Portfolio from './containers/Portfolio/Portfolio'
import Contact from './containers/Contact/Contact'
import About from './containers/About/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </React.Fragment>
    </Router>
  );
}

export default App;
