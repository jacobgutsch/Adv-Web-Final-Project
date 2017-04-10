import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './components/HelloComponent.jsx';

const element = (
  <div>
    <MyComponent asPageHeader message="Hello from ReactApp.jsx" />
    <MyComponent message="This is the second header" />
  </div>
);

ReactDOM.render(
  element, document.getElementById('app-root')
);
