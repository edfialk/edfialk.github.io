var React = require('react');
var Link = require('react-router').Link;
var Footer = require('../footer.jsx');
// var browserHistory = require('react-router').browserHistory;
import { Navigation } from 'react-router';

module.exports = React.createClass({
	mixins: [ Navigation ],
	go() {
		window.location = '/';
	},
	render() {
	    return (
	      <div className="page" id="thanks-page" style={{paddingTop:'50px'}}>
	      	<div className="mdl-grid">
			  <div className="mdl-cell mdl-cell--10-col mdl-cell--1-offset mdl-typography--display-2">
			  	Thank You!
			  </div>
			  <div className="mdl-cell mdl-cell--10-col mdl-cell--1-offset mdl-typography--display-1">
			  	I will get back to you as soon as I can.
			  </div>
			  <div className="mdl-cell mdl-cell--10-col mdl-cell--1-offset mdl-typography--display-1" style={{marginTop: "50px"}}>
			    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.go} style={{marginBottom: "50px"}}>
			      Go home
			    </button>
			  </div>
			</div>
        	<Footer/>
	      </div>
	    )
	}
});