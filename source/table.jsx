/* eslint import/no-extraneous-dependencies: 'off' */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const $ = require('jquery');

require('datatables.net-bs4');
require('datatables.net-buttons-bs4');
require('datatables.net-responsive-bs4');
require('datatables.net-select');

let studentTable = '';

class Table extends Component {
  componentDidMount() {
    console.log(this.props.records);
    this.renderTable();
  }

  shouldComponentUpdate(nextProps) {
    console.log(this.props.records);
    if (nextProps.records.length !== this.props.records.length) {
      this.renderTable();
    }
    return false;
  }

  componentWillUpdate() {
    console.log(this.props.records);
  }

  renderTable() {
    studentTable = $(this.myTable).DataTable({
      columns: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        {
          className: 'edit--btn',
          orderable: false,
          data: null,
          width: '5%',
        },
        {
          className: 'delete--btn',
          orderable: false,
          data: null,
          width: '5%',
        },
      ],
      lengthChange: false,
      select: {
        style: 'single',
      },
      buttons: [
        {
          text: 'New Record',
          action() {

          },
        },
        {
          text: 'View Record',
          action() {

          },
        },
      ],
      columnDefs: [
        {
          visible: false,
          targets: [0, 4, 5, 7, 9, 10],
        },
        {
          targets: -1,
          data: null,
          defaultContent: '<button class="edit--btn btn btn-danger">Delete!</button>',
        },
        {
          targets: -2,
          data: null,
          defaultContent: '<button class="delete--btn btn btn-primary">Edit!</button>',
        },
      ],
      data: this.props.records,
    });

    studentTable.buttons().container().appendTo($('.col-md-6:eq(0)', studentTable.table().container()));
  }

  render() {
    return (
      <table
        ref={(table) => { this.myTable = table; }}
        className='display table table-striped table-hover'
        width='100%'
      >
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

Table.propTypes = {
  records: PropTypes.node,
};

Table.defaultProps = {
  records: [],
};

export default Table;
