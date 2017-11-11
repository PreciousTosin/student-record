/* eslint import/no-extraneous-dependencies: 'off', class-methods-use-this: 'off' */

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router,  Link } from 'react-router-dom';

import SwitchRoute from './switch';

import '../public/stylesheets/style.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">NORMAN</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link className="nav-link" to="/new">New Record</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/view">View Record</Link></li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <h1>ReactJS scaffold</h1>

          <SwitchRoute/>
        </div>
      </div>
    );
  }
}

render((
  <Router>
    <App/>
  </Router>
), document.getElementById('app'));
