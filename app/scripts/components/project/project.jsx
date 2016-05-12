var React = require('react');
var Link = require('react-router').Link;
var CX = require('classnames');

module.exports = React.createClass({
	render() {
		let classes = CX({
			'mdl-cell mdl-cell--2-col-phone mdl-cell--1-offset-phone mdl-cell--2-col-tablet mdl-cell--4-col-desktop': true,
			'mdl-cell--1-offset-tablet' : this.props.first
		});
	    return (
	      <div className={classes}>
	      	<Link to={ this.props.link }>
	      		<img src={ this.props.image } />
	          	<div className="caption">
	          		<div>
		          		<h4>{ this.props.title }</h4>
		          		<h6>{ this.props.tag }</h6>
		          		<p>{ this.props.stack }</p>
		          	</div>
	          	</div>
	        </Link>
	      </div>
	    )
	}
});