import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './components/HelloComponent.jsx';

const navBarStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%'
};

const element = (
  <div>
    <div style={navBarStyle} className="w3-bar w3-black">
      <a href="#" className="w3-bar-item w3-button">Home</a>
      <a href="#" className="w3-bar-item w3-dropdown-hover">
        <button className="w3-button">Hover Over Me!</button>
        <div className="w3-dropdown-content w3-bar-block w3-border">
          <a href="#" className="w3-bar-item w3-button">Link 1</a>
          <a href="#" className="w3-bar-item w3-button">Link 2</a>
          <a href="#" className="w3-bar-item w3-button">Link 3</a>
        </div>
      </a>
      <a href="#" className="w3-bar-item w3-button">Link 2</a>
      <a href="#" className="w3-bar-item w3-button">Link 3</a>
    </div>
    <MyComponent asPageHeader message="Hello from ReactApp.jsx" />
    <MyComponent message="This is the second header" />
  </div>
);

ReactDOM.render(
  element, document.getElementById('app-root')
);
