import React from 'react';

class NavBar extends React.Component {

  render() {

    return (
      <div  className='w3-container w3-margin'>
        <div className="w3-top">
          <div className="w3-bar w3-light-blue">
            <a href="#" className="w3-bar-item w3-button">Home</a>
            <a href="#" className="w3-bar-item w3-button">Link 1</a>
            <div className="w3-dropdown-hover">
              <button className="w3-button">Sort By</button>
              <div className="w3-dropdown-content w3-bar-block w3-card-4">
                <a href="#" className="w3-bar-item w3-button">Name</a>
                <a href="#" className="w3-bar-item w3-button">Date</a>
                <a href="#" className="w3-bar-item w3-button">Professor</a>
                <a href="#" className="w3-bar-item w3-button">Genre</a>
                <a href="#" className="w3-bar-item w3-button">Class No.</a>
                <a href="#" className="w3-bar-item w3-button">Id</a>
                <a href="#" className="w3-bar-item w3-button">Platform</a>
              </div>
            </div>
            <a href="#" className="w3-bar-item w3-button">Filter By</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
