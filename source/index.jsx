/* eslint import/no-extraneous-dependencies: 'off', class-methods-use-this: 'off' */

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router,  Link } from 'react-router-dom';

import SwitchRoute from './switch';
import Table from './table';

import '../public/stylesheets/style.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      records: [],
      pageLoaded: false,
    }
  }
  componentDidMount() {
    this._getRecords();
  }

  _reFormat(data) {
    const finalData = {};
    const largerArr = [];

    data.students.forEach((studentObj) => {
      const studentArr = $.map(studentObj, el => el.toString());
      largerArr.push(studentArr);
    });

    finalData.data = largerArr;
    console.log(finalData);
    // console.log(JSON.stringify(finalData));
    // return JSON.stringify(finalData);
    return finalData.data;
  }
  _getRecords() {
    $.ajax({
      url: '/students',
    }).done((data) => {
      console.log('RETRIEVED DATA');
      console.log(data);
      const arrayData = this._reFormat(data);
      this.setState({
        records: arrayData,
        pageLoaded: true,
      });
    });
  }
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
            {this.state.pageLoaded?<Table records={this.state.records}/>: null}
        </div>
        <SwitchRoute/>
      </div>
    );
  }
}

render((
  <Router>
    <App/>
  </Router>
), document.getElementById('app'));
