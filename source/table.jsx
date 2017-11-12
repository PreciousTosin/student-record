import React, { Component } from  'react';

const $ = require('jquery');

require('datatables.net-bs4');
require('datatables.net-buttons-bs4');
require('datatables.net-responsive-bs4');
require('datatables.net-select');

class Table extends Component {
  constructor() {
    super();

    this.state = {
      records: [],
    }
  }
  _reFormat() {
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
    return finalData;
  }
  _getRecords() {
    $.ajax({
      url: '/students',
    }).done((data) => {
      console.log('RETRIEVED DATA');
      console.log(data);
      return this._reFormat(data);
    });
  }

  _renderTable() {

  }

  render() {
    return (
      <table id="my-table" className="display table table-striped table-hover" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Version</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Version</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default Table;
