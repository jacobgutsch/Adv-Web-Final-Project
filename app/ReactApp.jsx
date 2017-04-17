import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './components/HelloComponent.jsx';
import NavBar from './components/NavBar.jsx';

const element = (
  <div>
    <NavBar />
    <MyComponent asPageHeader message="Hello from ReactApp.jsx" />
    <MyComponent message="This is the second header" />
  </div>
);

ReactDOM.render(
  element, document.getElementById('app-root')
);
