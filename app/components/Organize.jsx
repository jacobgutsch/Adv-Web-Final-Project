import React from 'react';
import Games from './Games.jsx';
import NavBar from './NavBar.jsx';

import * as ApiHelper from '../apiHelper';

class Organize extends React.Component {
  render() {

    let tableStyle = {
      width: '20%',
      textAlign: 'center'
    };

    console.log(this.props.sort);

    if(this.sort == null || this.sort == '') {
      return (
        <table className="w3-table w3-centered" style={{width: '100%'}}>
          <tbody>
            <tr>
              <th style={tableStyle}>
                <Games id={1}/>
              </th>
              <th style={tableStyle}>
                <Games id={2}/>
              </th>
              <th style={tableStyle}>
                <Games id={3}/>
              </th>
              <th style={tableStyle}>
                <Games id={4}/>
              </th>
              <th style={tableStyle}>
                <Games id={5}/>
              </th>
            </tr>
          </tbody>
        </table>
      );
    } else if(this.sort == 'Name') {
      return (
        <table className="w3-table w3-centered" style={{width: '100%'}}>
          <tbody>
            <tr>
              <th style={tableStyle}>
                <Games id={1}/>
              </th>
              <th style={tableStyle}>
                <Games id={4}/>
              </th>
              <th style={tableStyle}>
                <Games id={3}/>
              </th>
              <th style={tableStyle}>
                <Games id={5}/>
              </th>
              <th style={tableStyle}>
                <Games id={2}/>
              </th>
            </tr>
          </tbody>
        </table>
      );
    }
  }
}


Organize.propTypes = {
  sort: React.PropTypes.string
};

export default Organize;
