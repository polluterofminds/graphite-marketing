import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import tweets from './tweets.png';
import newdoc from './newdoc.png';
import editdoc from './editdoc.png';
import sheets from './sheets.png';
import stats from './stats.png';
import share from './share.png';
import retrieve from './retrieve.png';
import shareddoc from './shareddoc.png';
import blockstack from './blockstack.png';

class App extends Component {

  render() {
    var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

var date = new Date();
var year = date.getFullYear();


    return (
      <div className="App">
        <Header />
        <div className="center-align main-hero">
          <div className="container">
          <div className="card hero-card">
          <h1>Own your
          <span
             className="txt-rotate"
             data-period="2000"
             data-rotate='[ " documents.", " spreadsheets.", " data." ]'></span>
          </h1>
            <h5>Graphite is built with Blockstack and empowers you to create without giving up your privacy</h5>
            <a href="http://app.graphitedocs.com" target="_blank"><button
              className="btn btn-primary btn-lg"
              id="signin-button"
            >
              Get Started
            </button></a>
            <a href="#more"><button
              className="btn btn-primary btn-lg grey"
            >
              Learn More
            </button></a>
          </div>
          </div>
        </div>
        <div>
        <div className="white-section">
          <div className="container row" id="more">
            <div className="col copy center-align s12 m6">
              <img className="splash responsive-img" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/collaboration2_8og0.svg" alt="collaboration" />
              <p>Make something great today. Create a document. Create a spreadsheet. Share it, get feedback, get work done.</p>

              <img className="splash responsive-img splash-two" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/files1_9ool.svg" alt="documents" />
              <p>Your documents, your files. They are all yours. Encrypted and only available to others if you say they are.</p>
            </div>
            <div className="col s12 m6">
              <img className="responsive-img big-image" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/working2_ce2b.svg" alt="work" />
            </div>
          </div>
        </div>
          <div className="grey-section">
            <div className="container">
            <h3 className="center-align second-section-row">Where is your data stored?</h3>
            <div className="row">
              <div className="col s12 m6 second-section">
                <h4>Who owns your data?</h4>
                <p>If you are like most people, corporations own your data. And if that data is in the cloud
                you could lose access to everything without warning.</p>
                <img className="responsive-img card" src={tweets} alt="Tweets" />
                <p>
                  Your work is your work. You should always have access to it. You should never have it taken
                  from you.
                </p>
              </div>
              <div className="col s12 m6 second-section">
                <h4>Who should own your data?</h4>
                <p>
                  You should.
                </p>
                <p>
                  You do not have to be someone else's commodity. You don't use a service so that corporations can
                  make money off you or your data.
                </p>
                <ul className="stats">
                  <li><i className="material-icons">backup</i>Google owns 80% of all emails in the United States.</li>
                  <li><i className="material-icons">computer</i>Amazon stores data for 57% of all web apps.</li>
                  <li><i className="material-icons">contacts</i>Microsoft Office 365 has data on 70 million active users.</li>
                </ul>
                <p>
                  Take back your data. Access it when you want, store it where you want, and use it how you want. That is your
                  right. Your documents are yours and yours alone.
                </p>
                <p>
                  Graphite never has access to your information. Graphite does not store your data. Everything you do in Graphite is
                  encrypted when saved and decrypted only when documents are loaded.
                </p>
              </div>
            </div>
            <div className="disclaimer center-align">
              <p><i>Google data provided by <a href="https://www.whoishostingthis.com/blog/2013/05/29/internet-privacy-infographic/" target="_blank">Who Is Hosting This.</a></i></p>
              <p><i>Amazon data provided by <a href="https://www.statista.com/statistics/511467/worldwide-survey-public-coud-services-running-application/" target="_blank">Statistica.</a></i></p>
              <p><i>Microsoft data provided by <a href="http://www.enowsoftware.com/solutions-engine/lies-damn-lies-and-statistics-obfuscate-office-365-numbers" target="_blank">Enow Software.</a></i></p>
            </div>
          </div>
          </div>
        </div>
        <div className="section-three">
          <div className="container">
            <div className="center-align">
            <h1 id="features">Features</h1>
            <h3 className="center-align">Documents</h3>
            <div className="row">
            <div className="col s12 m6">
            <img className="responsive-img" src={editdoc} alt="computer screen" />
            <h3>Create a new document and write something great.</h3>


            </div>
            <div className="col s12 m6">


            <ul className="stats">
              <li>Auto-Save</li>
              <li>Document Formatting</li>
              <li>Indentation (or not)</li>
              <li>Word Counter</li>
              <li>Auto-Expanding Text Area</li>
              <li>Document Preview</li>
              <li>Print</li>
              <li>Save to PDF</li>
              <li>Save to Word</li>
              <li>Formatting Matched to Export</li>
              <li>Encrypted Sharing</li>
              <li>And More...</li>
            </ul>
            </div>
            <h3 className="center-align">Spreadsheets</h3>
              <div className="col s12 m6">
              <ul className="stats">
                <li>Auto-Save</li>
                <li>Formula Support</li>
                <li>Export to CSV</li>
                <li>Save to PDF</li>
                <li>Import Sheets</li>
                <li>Print</li>
                <li>Export in Portrait or Landscape</li>
                <li>Encrypted Sharing</li>
                <li>And More...</li>
              </ul>
              </div>
              <div className="col s12 m6">
              <img className="responsive-img" src={sheets} alt="computer screen" />
              <h3>Create a new sheet, run calculations, get work done.</h3>
              </div>
            </div>
          </div>
          </div>
          <div className="grey-section sharing-section col s12">
            <h3 className="center-align">Encrypted Sharing</h3>
            <p className="center-align">Share your encrypted files over a decentralized network. Never again worry about any entity removing your access.</p>
            <p className="center-align">Your files are your files. Graphite never reads, nor has access to, anything you do. You decide who has access to your work, and when.</p>
            <div className="center-align">
              <div className="row">
                <div className="col s12">
                  <img src={share} alt="sharing docs example" className="responsive-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-four center-align">
          <h1>How it Works</h1>
          <h4>Graphite never stores your identity or data</h4>
          <img className="responsive-img" src={blockstack} alt="Blockstack architecture diagram" />
          <div>
          <a href="http://blockstack.org" target="_blank"><button
            className="btn btn-primary btn-lg"
            id="signin-button"
          >
            Learn More About Blockstack
          </button></a>
          </div>
        </div>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Graphite</h5>
                <p className="grey-text text-lighten-4">Own your documents.</p>
              </div>
              <div className="col l4 offset-l2 s12">

                <ul className="right">
                  <li><a className="grey-text text-lighten-3" href="http://app.graphitedocs.com">Sign In</a></li>
                  <li><a className="grey-text text-lighten-3" href="#features">Features</a></li>
                  <li><a className="grey-text text-lighten-3" href="http://blockstack.org">Blockstack</a></li>
                  <li><a className="grey-text text-lighten-3" href="mailto:contact@graphitedocs.com">Contact</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://twitter.com/graphitedocs">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © {year} Graphite
            </div>
          </div>
        </footer>
      </div>
    );

  }
}

export default App;
