var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
	render() {
	    return (
	      <div className="mdl-cell mdl-cell--12-phone">
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