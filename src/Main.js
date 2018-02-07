import React, { Component } from 'react';
import tweets from './tweets.png';
import newdoc from './newdoc.png';
import editdoc from './editdoc.png';
import sheets from './sheets.png';
import stats from './stats.png';
import share from './share.png';
import retrieve from './retrieve.png';
import shareddoc from './shareddoc.png';
import blockstack from './blockstack.png';


class Main extends Component {
  render() {
    return(
      <div>
      <div className="center-align main-hero">
        <div className="container">
        <div className="card hero-card">
        <h1>Own your
        <span
           className="txt-rotate"
           data-period="2000"
           data-rotate='[ " documents.", " spreadsheets.", " data." ]'></span>
        </h1>
          <h5>Graphite is powered by <a href="http://blockstack.org" target="_blank">Blockstack</a> and empowers you to create without giving up your privacy</h5>
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
      <div className="hero-image-section row">
        <div className="col s12 m6">

        </div>
        <div className="col s12 m6 hero-image-content">
          <h1 className="center-align">Work anywhere without worrying about your data.</h1>
          <div className="center-align"><i className="material-icons">lock_outline</i><i className="material-icons">share</i><i className="material-icons">all_inclusive</i></div>
          <h5 className="center-align">All your work, files, and messages—encrypted, shareable, decentalized</h5>
        </div>
      </div>
      <div>

      <div className="white-section app-banner">
        <div className="container row">
          <div className="col s6 m3 center-align">
            <i className="material-icons large blue-text text-darken-2">description</i>
            <h4 className="flow-text">Documents</h4>
          </div>
          <div className="col s6 m3 center-align">
            <i className="material-icons large green-text text-lighten-1">grid_on</i>
            <h4 className="flow-text">Sheets</h4>
          </div>
          <div className="col s6 m3 center-align">
            <i className="material-icons large purple-text lighten-3">contacts</i>
            <h4 className="flow-text">Contacts</h4>
          </div>
          <div className="col s6 m3 center-align">
            <i className="material-icons large orange-text accent-2">chat</i>
            <h4 className="flow-text">Conversations</h4>
          </div>
        </div>
      </div>
        <div className="grey-section">
          <div className="container center-align">
            <p className="caps white-text">Encrypted and decentralized</p>
            <h5 className="white-text">Graphite enables convenient, secure, decentralized, and user-owned file creation, file storage, communication, and sharing.</h5>
            <div className="row benefits center-align">
              <div className="col s12 m4">
                <i className="material-icons medium white-text">computer</i>
                <p className="benefits-p white-text">Work and play with the same convenience you expect from cloud computing.</p>
              </div>
              <div className="col s12 m4">
                <i className="material-icons medium white-text">content_copy</i>
                <p className="benefits-p white-text">Share files, make edits, and collaborate while never losing ownership of your data.</p>
              </div>
              <div className="col s12 m4">
                <i className="material-icons medium white-text">chat_bubble_outline</i>
                <p className="benefits-p white-text">Chat with friends, colleagues, or classmates with full end-to-end encryption and privacy.</p>
              </div>
              <div className="center-align">
                <button className="btn features-btn waves-effect waves-light white black-text">Features</button>
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
      </div>
    );
  }
}

export default Main;
