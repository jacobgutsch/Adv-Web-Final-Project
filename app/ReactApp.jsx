import React from 'react';
import ReactDOM from 'react-dom';


const navBarStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%'
};


const element = (
    <div style={navBarStyle} className="w3-bar w3-light-grey">
      <a href="#" className="w3-bar-item w3-button">Home</a>
      <a href="#" className="w3-bar-item w3-button">Link 1</a>
      <div className="w3-dropdown-hover">
        <button className="w3-button">Dropdown</button>
        <div className="w3-dropdown-content w3-bar-block w3-card-4">
          <a href="#" className="w3-bar-item w3-button">Link 1</a>
          <a href="#" className="w3-bar-item w3-button">Link 2</a>
          <a href="#" className="w3-bar-item w3-button">Link 3</a>
        </div>
      </div>
    </div>
);

ReactDOM.render(
  element, document.getElementById('app-root')
);
