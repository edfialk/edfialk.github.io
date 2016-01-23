var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
      <footer className="mdl-mega-footer">
        <div className="mdl-mega-footer--middle-section">
          <div className="mdl-mega-footer--drop-down-section">
            <input className="mdl-mega-footer--heading-checkbox" type="checkbox" defaultChecked />
            <h1 className="mdl-mega-footer--heading">Contact</h1>
            <ul className="mdl-mega-footer--link-list">
              <li><a href="#"><i className="fa fa-comment" /> Send a quick message</a></li>
              <li><a href="#"><i className="fa fa-envelope" /> Email</a></li>
              <li><a href="#"><i className="fa fa-phone" /> Phone</a></li>
              <li><a href="#"><i className="fa fa-linkedin" /> LinkedIn</a></li>
              <li><a href="#"><i className="fa fa-facebook" /> Facebook</a></li>
              <li><a href="#"><i className="fa fa-instagram" /> Instagram</a></li>
            </ul>
          </div>
          <div className="mdl-mega-footer--drop-down-section">
            <input className="mdl-mega-footer--heading-checkbox" type="checkbox" defaultChecked />
            <h1 className="mdl-mega-footer--heading">Code</h1>
            <ul className="mdl-mega-footer--link-list">
              <li><a href="#"><i className="fa fa-github" />Github</a></li>
              <li><a href="#"><i className="fa fa-bitbucket" />Bitbucket</a></li>
              <li><a href="#"><i className="fa fa-rss" />Blog</a></li>
            </ul>
          </div>
          <div className="mdl-mega-footer--drop-down-section">
            <input className="mdl-mega-footer--heading-checkbox" type="checkbox" defaultChecked />
            <h1 className="mdl-mega-footer--heading">Skills</h1>
            <ul className="mdl-mega-footer--link-list">
              <li><a href="#">Javascript</a></li>
              <li><a href="#">Node</a></li>
              <li><a href="#">PHP</a></li>
              <li><a href="#">CSS3</a></li>
            </ul>
          </div>
          <div className="mdl-mega-footer--drop-down-section">
            <input className="mdl-mega-footer--heading-checkbox" type="checkbox" defaultChecked />
            <h1 className="mdl-mega-footer--heading">Projects</h1>
            <ul className="mdl-mega-footer--link-list">
              <li><a href="#">Kloj</a></li>
              <li><a href="#">Contact My Reps</a></li>
              <li><a href="#">Papa Squat</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
});