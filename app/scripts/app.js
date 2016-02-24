'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Index from './index.jsx';
import Kloj from './pages/kloj.jsx';
import Contact from './pages/contactmyreps.jsx';
import PapaSquat from './pages/papa.jsx';
import ACP from './pages/acp.jsx';

const history = createHashHistory({queryKey: false})

const App = React.createClass({
  getInitialState() {
    return { didAnimation: true };
  },
  componentDidUpdate() {
    this.state.didAnimation = true;
  },
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="pageChange"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={0}
        >
          {this.props.children && React.cloneElement(this.props.children, {
            didAnimation: this.state.didAnimation,
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="kloj" component={Kloj}/>
      <Route path="contactmyreps" component={Contact}/>
      <Route path="papasquat" component={PapaSquat}/>
      <Route path="acp" component={ACP}/>
    </Route>
  </Router>
), document.getElementById('react'));
