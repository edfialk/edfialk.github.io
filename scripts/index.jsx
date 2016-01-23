var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

	render: function() {
	    return (
	      <div>
	        <section className="mdl-grid">
	          <div className="mdl-cell mdl-cell--8-col">
	            <h2>Ed Fialkowski</h2>
	            <h5>Full Stack Web Developer</h5>
	            <h5>BS in Computer Science from Washington University in St. Louis</h5>
	            <h5>Currently in Portland, Oregon</h5>
	          </div>
	          <div className="mdl-cell mdl-cell-4-col header-contact">
	            <div className="header-contact--inner">
	              <a href="http://edfialk.com"><i className="desktop" /></a>
	              <a href><i className="fa fa-github" /></a>
	              <a href><i className="fa fa-bitbucket" /></a>
	              <a href="mailto:edfialk@gmail.com"><i className="fa fa-facebook" /></a>
	              <a href="mailto:edfialk@gmail.com"><i className="fa fa-linkedin" /></a>
	              <a href="mailto:edfialk@gmail.com"><i className="fa fa-instagram" /></a>
	            </div>
	          </div>
	        </section>
	        <section className="mdl-grid">
	          <div className="mdl-cell mdl-cell--10-col mdl-typography--text-large">
	            I enjoy building everything from landing pages to rich interactive web apps. I have a diverse set of skills on both back-end and front-end, including ES6, LAMP, MEAN, Relational DB, Laravel, Vue, Backbone, React, Flux (Alt), Angular 1, CSS, custom Drupal modules and themes, and Linux server administration. I'm fluent in working with API's, Responsive Design, OOP, design structures, Agile development, page speed, and working remotely. Vue is currently my favorite front-end. I have worked a lot in Laravel, but I'm becoming more fond of node servers.
	          </div>
	        </section>
	        <section className="mdl-grid">
	          <div className="mdl-cell mdl-cell--12-col">
	            <h5>Great Works Online <small>Founder, Developer - 2013 - present</small></h5>
	            <ul>
	              <li className="in-progress"><small><em> in active development</em></small></li>
	            </ul>
	            <ul>
	              <li className="in-progress"><strong><Link to="/kloj">Kloj</Link></strong> - Design and Development - Aesthetic Feed Reeder and Link Sharing - Laravel, Backbone</li>
	              <li><strong>Atmospheric Composition Portal</strong> - Developer - Drupal administration, hosting, theme, and modules</li>
	              <li className="in-progress"><strong>Contact My Reps</strong> - Developer - combining external public API's and geolocation to faciliate dialogue with government representatives - Laravel, Vue</li>
	              <li><strong>Papa Squat</strong> - Design and Development - Yelp for relaxing locations outdoors - Laravel, React</li>
	              <li className="in-progress"><strong>Singular</strong> - Design and Development - In-browser artificial intelligence simulator game - progress from command line to fully featured interactive hud - React, Flux, Mongo</li>
	              <li className="in-progress"><strong>Axiomatik</strong> - Design and Development - A user-driven logical breakdown of the world's common arguments - Laravel</li>
	            </ul>
	            <h5>Northrop Grumman Corp<small> - Developer - 2010 - 2013</small></h5>
	            <ul>
	              <li><strong>National Geospatial Intelligence Agency</strong> - Lead Developer - TS/SCI Clearance, Spatial Database, ASP.net, Java</li>
	              <li><strong>GeoHome - Flex framework for geospatial apps</strong> - Developer - Java, Flex, Big Data</li>
	              <li><strong>NASA, EPA</strong> - Developer - OGC web services, app development, Drupal administration, theme, and modules</li>
	            </ul>
	            <h5>Washington University in St. Louis<small> - Developer - 2006 - 2010</small></h5>
	            <ul>
	              <li><strong>Center for Air Pollution Impact and Trend Analysis</strong> - Developer - OGC web services, interactive web apps, Drupal administration, theme, and modules</li>
	            </ul>
	          </div>
	        </section>
	        <section className="mdl-grid">
	          <div className="mdl-cell mdl-cell--12-col text-center">
	            <h5>Current Projects</h5>
	          </div>
	          <div className="mdl-cell mdl-cell--12-phone">
	            Project 1
	          </div>
	          <div className="mdl-cell mdl-cell--12-phone">
	            Project 2
	          </div>
	          <div className="mdl-cell mdl-cell--12-phone">
	            Project 3
	          </div>
	        </section>
	      </div>
	    );
	}

});

// module.exports = index;