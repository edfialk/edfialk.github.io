var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({
	rawText: function() {
		return { __html: this.props.text };
	},
	image() {
		if (!this.props.image) return '';
		var imageClasses = cx({
			'project-image mdl-cell' : true,
			'mdl-cell--6-col' : this.props.image && this.props.text,
			'mdl-cell--12-col center-text' : this.props.image && !this.props.text,
			'mdl-cell--order-2' : !this.props.imageLeft
		});
		return (
			<div className={imageClasses}>
				<img src={this.props.image} />
			</div>
		)
	},
	text() {
		if (this.props.title && !this.props.text){
			return (
				<div className="mdl-cell mdl-cell--12-col center-text">
					<h5>{this.props.title}</h5>
				</div>
			);
		}
		if (!this.props.text){
			return '';
		}
		var textClasses = cx({
			'mdl-cell mdl-cell--6-col' : this.props.image,
			'mdl-cell mdl-cell--12-col center-text' : !this.props.image
		});
		return (
			<div className={textClasses}>
				<h5>{this.props.title}</h5>
				<div dangerouslySetInnerHTML={this.rawText() }/>
			</div>
		)
	},
	render() {
	    return (
	        <section className="mdl-grid project-section">
	      		{ this.image() }
	      		{ this.text() }
	        </section>
	    );
	}
});