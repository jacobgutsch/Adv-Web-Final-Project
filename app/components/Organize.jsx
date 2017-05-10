import React from 'react';
import Games from './Games.jsx';

class Organize extends React.Component {



  render() {

    let tableStyle = {
      width: '20%',
      textAlign: 'center'
    };

    console.log(this.props.sort);

    if(this.props.sort == null || this.props.sort == '' || this.props.sort == 'Id') {
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
    } else if(this.props.sort == 'Name') {
      return (
        <div>
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
        </div>
      );
    } else if(this.props.sort == 'Year') {
      return (
        <div>
          <div>
            <table className="w3-table w3-centered" style={{width: '100%'}}>
              <tbody>
                <tr>
                  <th style={tableStyle}>
                    <Games id={5}/>
                  </th>
                  <th style={tableStyle}>
                    <Games id={1}/>
                  </th>
                  <th style={tableStyle}>
                    <Games id={4}/>
                  </th>
                  <th style={tableStyle}>
                    <Games id={2}/>
                  </th>
                  <th style={tableStyle}>
                    <Games id={3}/>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    } else if(this.props.sort == 'Genre') {
      return (
        <div>
          <div>
            <div>
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
                      <Games id={5}/>
                    </th>
                    <th style={tableStyle}>
                      <Games id={3}/>
                    </th>
                    <th style={tableStyle}>
                      <Games id={4}/>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return (<p>Invalid Sort Type</p>);
    }
  }
}


Organize.propTypes = {
  sort: React.PropTypes.string
};

export default Organize;
