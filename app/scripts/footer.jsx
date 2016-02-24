var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
	render: function() {
		return (
      <footer className="mdl-mega-footer noprint">
        <div className="mdl-mega-footer--middle-section">
          <div className="mdl-mega-footer--drop-down-section">
            <input className="mdl-mega-footer--heading-checkbox" type="checkbox" defaultChecked />
            <h1 className="mdl-mega-footer--heading">Contact</h1>
            <ul className="mdl-mega-footer--link-list">
              <li><Link to="/contact"><i className="fa fa-comment" /> Send a quick message</Link></li>
              <li><a href="mailto:edfialk@gmail.com"><i className="fa fa-envelope" /> Email</a></li>
              <li><a href="https://www.linkedin.com/in/ed-fialkowski-06b508a2"><i className="fa fa-linkedin" /> LinkedIn</a></li>
              <li><a href="https://www.facebook.com/edfialk"><i className="fa fa-facebook" /> Facebook</a></li>
              <li><a href="https://plus.google.com/u/0/115272869343292818360"><i className="fa fa-google-plus" /> Google</a></li>
            </ul>
          </div>
          <div className="mdl-mega-footer--drop-down-section">
            <input className="mdl-mega-footer--heading-checkbox" type="checkbox" defaultChecked />
            <h1 className="mdl-mega-footer--heading">Work</h1>
            <ul className="mdl-mega-footer--link-list">
              <li><a href="https://github.com/edfialk"><i className="fa fa-github" />Github</a></li>
              <li><a href="https://bitbucket.org/edfialk"><i className="fa fa-bitbucket" />Bitbucket</a></li>
              <li><a href="#"><i className="fa fa-rss" />Blog</a></li>
              <li><a href="https://www.flickr.com/people/69354818@N08/"><i className="fa fa-flickr" />Flickr</a></li>
            </ul>
          </div>
          <div className="mdl-mega-footer--drop-down-section">
            <input className="mdl-mega-footer--heading-checkbox" type="checkbox" defaultChecked />
            <h1 className="mdl-mega-footer--heading">Skills</h1>
            <ul className="mdl-mega-footer--link-list">
              <li>Javascript</li>
              <li>Node</li>
              <li>PHP</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div className="mdl-mega-footer--drop-down-section">
            <input className="mdl-mega-footer--heading-checkbox" type="checkbox" defaultChecked />
            <h1 className="mdl-mega-footer--heading">Projects</h1>
            <ul className="mdl-mega-footer--link-list">
              <li><Link to="/kloj">Kloj</Link></li>
              <li><Link to="/contactmyreps">Contact My Reps</Link></li>
              <li><Link to="/papasquat">Papa Squat</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
});