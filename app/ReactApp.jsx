import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/NavBar.jsx';

const element = (
  <div>
    <Navbar />
  </div>
);

ReactDOM.render(
  element, document.getElementById('app-root')
);
