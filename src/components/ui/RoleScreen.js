// import React, {Component} from 'react';

import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class RoleScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { deps: [] }
  }

  componentDidMount() {
    this.refreshList();
  }
  refreshList() {
    this.setState({
      deps: [
        { "Id": 1, "Name": "Admin", "Desc": "Administrator" },
        { "Id": 2, "Name": "User", "Desc": "User" },
        { "Id": 3, "Name": "Guest", "Desc": "Guest" },
      ]
    });
  }

  render() {
    console.log(this.state.deps)
    return (      
      <div className="mt-5 d-flex justify-content-left">        
        <Table className='mt-4' striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.deps.map(t => { 
              return (
              <tr key={t.Id}>
                <td>{t.Id}</td>
                <td>{t.Name}</td>
                <td>{t.Desc}</td>
              </tr>)
            })
            }
          </tbody>
        </Table>

      </div>
    );
  }
}
