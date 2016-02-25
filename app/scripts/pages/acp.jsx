var React = require('react');
var Link = require('react-router').Link;
var ProjectHeader = require('../components/project/header.jsx');
var ProjectSection = require('../components/project/section.jsx');
var Footer = require('../footer.jsx');

module.exports = React.createClass({
	render() {
	    return (
	      <div className="page project-page">
	      	<ProjectHeader title="Atmospheric Composition Portal"
	      		description="tools and guidance for remotely sensed atmospheric data"
	      		github="https://github.com/edfialk/ACP"
	      	/>
	      	<ProjectSection title="Goal" image="/images/acp/home-monitor.png"
	      		text="To foster interoperability and application of atmospheric composition data, information, and services worldwide. To help identify the unique
	      			requirements and shared features of ACC and GEOSS users to provide a value-added and complementary capability."
	         />
	         <ProjectSection imageLeft title="Data Table" image="/images/acp/datatable-monitor.png"
	         	text="The group was happy with google spreadsheets for collaboration on public atmospheric data services, but needed a new solution for displaying the data.
	         		I created a drupal module for converting a google spreadsheet to html table. A common set of filters were added, with dynamic filters read live from the spreadsheet."
	         />
	         <ProjectSection title="Contextual Metadata" image="/images/acp/metadata-monitor.png"
	         	text="A tool for presenting the user with articles and news items relevant to a specific pollutant, sensor, or method. A full drupal module allowing
	         		new metadata pages or blocks to be created, structured, and configured to provide a default query. Data provided by George Mason University."
	         />
	         <ProjectSection imageLeft title="Powered by Drupal 7" image="/images/drupal.png" text=""/>
	         <Footer/>
	      </div>
	    )
	}
});