var React = require('react');
var Link = require('react-router').Link;
var ProjectHeader = require('../components/project/header.jsx');
var ProjectSection = require('../components/project/section.jsx');
var Footer = require('../footer.jsx');

module.exports = React.createClass({
	render() {
	    return (
	      <div className="page project-page">
	      	<ProjectHeader title="Kloj.net" description="really sexy syndication" github="https://bitbucket.org/edfialk/kloj"/>
	      	<ProjectSection title="Goal" image="/images/kloj/list-laptop-mockup.png"
	      		text="I wanted a better news reader. I wanted to read about topics, and view each topic in a custom way. My tech blogs just need headlines and summaries,
	          		my design blogs need a thumbnail, and my image sites don't even need a title, but they all need a way to consume, save, and publish content quickly."
	         />
	         <ProjectSection imageLeft title="Related Items" image="/images/kloj/grid-laptop-mockup.png"
	         	text="When multiple sites write about a major event, it tends to clogs up the view, usually with repeated information.
	         		Using <a href='https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient'>Dice coefficient</a>, I accurately <em>(usually)</em> group
	         		related articles into one featured post, allowing easy viewing of multiple sources for a single event."
	         />
	         <ProjectSection title="Real Luxury is Customization" image="/images/kloj/kloj-edit-laptop-mockup.png"
	         	text="<center>-Lapo Elkann</center><br/><p>Full customization of each Kloj with live preview.
	         		Click behavior, grouping, sorting, filtering, visible pieces and more.
	         		List, grid, brick, and magazine templates with common color schemes and behaviors as easy to choose themes.
	         		Many options also available when reading any kloj.</p>"
	         />
	         <ProjectSection imageLeft title="Stack" image="/images/kloj/kloj-mockup.jpg"
	         	text="<center>Laravel, Backbone Marionnette, SASS, Bootstrap.</center>"
	         />
	         <Footer/>
	      </div>
	    )
	}
});