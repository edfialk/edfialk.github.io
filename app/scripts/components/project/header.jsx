var React = require('react');

module.exports = React.createClass({
	componentWillMount() {
		$('.main').animate({ scrollTop: 0}, 'slow');
	},
	render() {
	    return (
	        <header className="mdl-grid project-header">
	          <div className="mdl-cell mdl-cell--12-col center-text">
							<p className="mdl-typography--display-2">{this.props.title}</p>
							<p className="mdl-typography--headline">{this.props.description}</p>
							<p className="mdl-typography--title">
								<a href={this.props.github}>Source</a>
								{(() => {
									if (this.props.site)
										return <a href={this.props.site}>Live Site</a>;
								})()}
							</p>
	          </div>
	        </header>
	    )
	}
});