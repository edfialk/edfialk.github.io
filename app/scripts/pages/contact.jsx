var React = require('react');
var Link = require('react-router').Link;
var Footer = require('../footer.jsx');

module.exports = React.createClass({
	componentDidMount() {
		componentHandler.upgradeDom();
		window.setTimeout(function(){
			$('.contact-hidden').css('opacity', 1);
		}, 500);
	},
	componentDidUpdate() {
		componentHandler.upgradeDom();
	},
	render() {
	    return (
	      <div className="page" id="contact-page" style={{paddingTop:'50px'}}>
	      	<form action="https://formspree.io/edfialk@gmail.com" method="POST" className="mdl-grid" style={{paddingBottom:'50px'}}>
			  <input type="hidden" name="_next" value="/#/thanks" />
			  <input type="text" name="_gotcha" style={{display:"none"}} />
			  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--6-col mdl-cell--3-offset">
			    <input className="mdl-textfield__input" type="text" pattern="[A-Z,a-z,\s]*" id="name" name="name" />
			    <label className="mdl-textfield__label" htmlFor="name">What should I call you?</label>
			    <span className="mdl-textfield__error">Only alphabet and spaces please.</span>
			  </div>
			  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--6-col mdl-cell--3-offset">
			    <input className="mdl-textfield__input" type="text" pattern="[A-Z,a-z,\s,-,0-9]*" id="contact" name="contact" />
			    <label className="mdl-textfield__label" htmlFor="name">How should I contact you?</label>
			    <span className="mdl-textfield__error">Email address or phone number please.</span>
			  </div>
			  <div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-cell--3-offset">
			    <textarea className="mdl-textfield__input" type="text" rows="3" id="text" name="text" ></textarea>
			    <label className="mdl-textfield__label" htmlFor="name">What would you like to tell me?</label>
			  </div>
			  <div className="mdl-cell mdl-cell--6-col mdl-cell--3-offset contact-hidden"  style={{opacity: 0, transition: '1s ease'}}>
			    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
			      Send
			    </button>
			  </div>
			</form>
			<div className="contact-hidden" style={{opacity: 0, transition: '1s ease'}}>
	        	<Footer/>
	        </div>
	      </div>
	    )
	}
});