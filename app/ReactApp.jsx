import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/NavBar.jsx';
import Games from './components/Games.jsx';

const element = (
  <div>
    <Navbar />
    <h4 className="w3-section">Welcome to UW Stout!</h4>
    <table>
      <tbody>
        <tr>
          <th>
            <Games id={1}/>
          </th>
          <th>
            <Games id={2}/>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
);

ReactDOM.render(
  element, document.getElementById('app-root')
);
