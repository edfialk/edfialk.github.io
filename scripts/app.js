'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Index from './index.jsx';
import Footer from './footer.jsx';
import Kloj from './kloj.jsx';

let history = createBrowserHistory()

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    )
  }
})

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="kloj" component={Kloj}/>
    </Route>
  </Router>
), document.getElementById('react'));
