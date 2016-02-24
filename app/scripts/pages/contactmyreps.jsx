var React = require('react');
var Link = require('react-router').Link;
var ProjectHeader = require('../components/project/header.jsx');
var ProjectSection = require('../components/project/section.jsx');
var Footer = require('../footer.jsx');

module.exports = React.createClass({
	render() {
	    return (
	      <div className="page project-page">
	      	<ProjectHeader title="Contact My Reps" description="Get your voice heard" role="Development" github="https://github.com/edfialk/ContactMyReps" site="http://contactmyreps.org"/>
	      	<ProjectSection title="Goal" image="/images/contactmyreps/contact-laptop-mockup.png"
	      		text="Allow users to quickly find and contact government representatives, either at their current location or a specific location."
        	/>
	        <ProjectSection imageLeft title="Sources" image="/images/contactmyreps/contact-laptop-mockup2.png"
	        	text="Our data is gathered from <a href='https://developers.google.com/civic-information/'>Google Civic Information</a>,
	        		<a href='https://sunlightlabs.github.io/congress/'>Sunlight Labs Congress API</a>, and <a href='http://openstates.org'>Open States</a>.
	        		However, it's a lot of information and much of it is incorrect, so we still rely on manual verification."
	        />
	        <ProjectSection title="Stack"
	         	text="Laravel, Vue, SASS, Bootstrap. Currently, I am the sole developer, but we're looking for a larger team."
	        />
	        <Footer/>
	      </div>
	    )
	}
});