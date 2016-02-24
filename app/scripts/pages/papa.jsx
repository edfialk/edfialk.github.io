var React = require('react');
var Link = require('react-router').Link;
var ProjectHeader = require('../components/project/header.jsx');
var ProjectSection = require('../components/project/section.jsx');
var Footer = require('../footer.jsx');

module.exports = React.createClass({
	render() {
	    return (
	      <div className="page project-page">
	      	<ProjectHeader title="PapaSquat.net" description="nearby spots to relax outdoors" github="https://bitbucket.org/edfialk/papasquat" site="http://papasquat.net"/>
	        <div className="mdl-grid">
	        	<div className="mdl-cell--12-col center-text">
	        		<img src="/images/papa/papa-mobile-iphone6.png" style={{width: '200px'}}/>
	        	</div>
	        </div>
	        <div className="mdl-grid">
	        	<div className="mdl-cell--12-col center-text">
	        		<img src="/images/papa/papa-mobile-page.png" style={{width: '200px'}}/>
	        	</div>
	        </div>
	      	<ProjectSection title="" image="/images/papa/papa-map-laptop-mockup.png" />
			<ProjectSection imageLeft title="" image="/images/papa/papa-item-laptop-mockup.png" />
	        <ProjectSection title="" image="/images/papa/papa-add-laptop-mockup.png" />
	        <Footer/>
	      </div>
	    )
	}
});