var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var Project = require('./components/project/project.jsx');
var Footer = require('./footer.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			didAnimation: this.props.didAnimation
		};
	},
	componentWillMount() {
		$('.main').animate({ scrollTop: 0}, 'slow');
	},
	componentDidMount: function() {
	    // $('.content').css('min-height', $('.content').height());

		if (this.state.didAnimation)
			return;

		var dom = ReactDOM.findDOMNode(this);
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		var $money = $('.moneyplz', dom).addClass('shake');
		var $print = $('.fa-print', dom);
		var $contact = $('.header-contact', dom);
		var $profile = $('.profile', dom);
		window.setTimeout(function(){
			$money.addClass('fadeToBlack').removeClass('highlight');
			$contact.addClass('fadeIn');
		}, 1000);
		window.setTimeout(function(){
			$print.addClass('bigtada highlight');
		}, 1500);
		window.setTimeout(function(){
			$print.addClass('fadeToBlack').removeClass('highlight');
			$('.intro', dom).addClass('fadeInUp');
		}, 3500);
		window.setTimeout(function(){
			$profile.addClass('fadeIn');
			$('.cv', dom).addClass('fadeIn');
			$('.current', dom).addClass('fadeIn');
		}, 4000);
		window.setTimeout(function(){
			$profile.addClass('grayscale');
		}, 5000);
	},
	handleMoneyClick() {
		//go to money page
	},
	render: function() {
	    return (
	      <div className="animated page">
	        <header className="mdl-grid">
	          <div className="header-info mdl-cell mdl-cell--12-col">
					<p className="mdl-typography--display-2">Ed Fialkowski</p>
					<p className="mdl-typography--headline">Full Stack Web Developer</p>
					<p id="moneyplz" className={"mdl-typography--title moneyplz noprint animated clickable " + ( !this.props.didAnimation ? 'highlight' : '' )}
						onClick={this.handleMoneyClick}>
						seeking full and part-time work
					</p>
	          		<p className="onlyprint mdl-typography--title">edfialk.com - edfialk@gmail.com</p>
	          </div>
	          <div className="header-profile">
	          	<img className="profile animated" src="/images/photo-trans80.png" style={ this.state.didAnimation ? {opacity: 1} : {} }/>
	          </div>
	          <div className="header-contact animated" style={ this.state.didAnimation ? {opacity: 1} : {} }>
	            <div className="header-contact--inner noprint">
	              <a href="https://www.facebook.com/edfialk"><i className="fa fa-fw fa-facebook" /></a>
	              <a href="https://plus.google.com/u/0/115272869343292818360"><i className="fa fa-fw fa-google-plus" /></a>
	              <span className="clickable noprint" onClick={window.print}><i className="fa fa-fw fa-print animated" /></span>
	              <a href="https://www.linkedin.com/in/ed-fialkowski-06b508a2"><i className="fa fa-fw fa-linkedin" /></a>
	              <a href="https://github.com/edfialk"><i className="fa fa-fw fa-github" /></a>
	              <a href="https://bitbucket.org/edfialk/"><i className="fa fa-fw fa-bitbucket" /></a>
	            </div>
	          </div>
	        </header>
	        <section className="mdl-grid intro animated" style={ this.state.didAnimation ? {opacity: 1} : {} }>
	          <div className="mdl-cell mdl-cell--1-offset mdl-cell--10-col mdl-typography--text-large">
	            I enjoy building everything from landing pages to rich interactive web apps. I have a diverse set of skills on both back-end and front-end, including ES6, LAMP, MEAN, Relational DB, Laravel, Vue, Backbone, React, Flux (Alt), Meteor, Drupal modules and themes, SQL, and Linux server administration. I'm fluent in working with API's, Responsive Design, OOP, design structures, Agile development, page speed, and working remotely. Vue is currently my favorite front-end. I have worked a lot in Laravel, but I'm becoming more fond of node servers. With the right design, I can make anything.
	          </div>
	        </section>
	        <section className="mdl-grid current animated noprint" style={ this.state.didAnimation ? {opacity: 1} : {opacity: 0} }>
	        	<Project title="Kloj.net" link="/kloj" image="/images/kloj/logo.png"
	        		tag="Aesthetic Feed Reader and Link Sharing"
	        		stack="Laravel, Backbone"
	        	/>
	        	<Project title="ContactMyReps.org" link="/contactmyreps" image="/images/contactmyreps/logo.jpg"
	        		tag="Combining public API's and geolocation to faciliate dialogue with government representatives"
	        		stack="Laravel, Vue"
	        	/>
	        	<Project title="PapaSquat.net" link="/papasquat" image="/images/papa/front.jpg"
	        		tag="Find nearby spots to sit outdoors in Portland"
	        		stack="Laravel, React"
	        	/>
	        </section>
	        <section className="mdl-grid cv animated" style={ this.state.didAnimation ? {opacity: 1} : {} }>
	          <div className="mdl-cell mdl-cell--12-col">
	            <h5>Great Works Online <small>Founder, Developer - 2013 - present</small></h5>
	            <ul>
	              <li><strong><Link to="/kloj">Kloj</Link></strong> - Design and Development - Aesthetic Feed Reeder and Link Sharing - Laravel, Backbone</li>
	              <li><strong><Link to="/acp">Atmospheric Composition Portal</Link></strong> - Developer - Drupal administration, hosting, theme, and modules</li>
	              <li><strong><Link to="/contactmyreps">Contact My Reps</Link></strong> - Developer - combining public API's and geolocation to faciliate dialogue with government representatives - Laravel, Vue, Mongo</li>
	              <li><strong><Link to="/papasquat">Papa Squat</Link></strong> - Design and Development - Yelp for relaxing locations outdoors - Laravel, React</li>
	              <li><strong>Singular</strong> - Design and Development - In-browser artificial intelligence simulator game - progress from command line to fully featured interactive hud - React, Alt, Express, Mongo</li>
	              <li><strong>Axiomatik</strong> - Design and Development - A user-driven logical breakdown of the world's common arguments - Laravel</li>
	            </ul>
	            <h5>Northrop Grumman Corp <small>Developer - 2010 - 2013</small></h5>
	            <ul>
	              <li><strong>National Geospatial Intelligence Agency</strong> - Lead Developer - TS/SCI Clearance, Spatial Database, ASP.net, Java</li>
	              <li><strong>GeoHome - Flex framework for geospatial apps</strong> - Developer - Java, Flex, Big Data</li>
	              <li><strong>NASA, EPA</strong> - Developer - OGC web services, app development, Drupal administration, theme, and modules</li>
	            </ul>
	            <h5>Washington University in St. Louis <small>Computer Science Degree - 2006, Developer - 2006 - 2010</small></h5>
	            <ul>
	              <li><strong>Center for Air Pollution Impact and Trend Analysis</strong> - Developer - OGC web services, interactive web apps, Drupal administration, theme, and modules. Javascript, PHP.</li>
	            </ul>
	          </div>
	        </section>
	        <Footer/>
	      </div>
	    );
	}

});

// module.exports = index;