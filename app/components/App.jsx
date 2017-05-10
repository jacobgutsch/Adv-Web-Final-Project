import React from 'react';

import NavBar from './NavBar.jsx';
import Organize from './Organize.jsx';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      sortBy: ''
    };
  }


  changeSort(SortBy) {
    this.setState({
      sortBy: SortBy
    });
  }


  render() {
    return (
      <div>
        <img width="34px" height="38px" src="../images/stoutLogo.png" alt="logo"></img>
        <NavBar sort={(SortBy) => {this.changeSort(SortBy);}}/>
        <img width='100%' height="300px" src="../images/stoutBanner.jpg" alt="stoutBanner"></img>
        <h4 className="w3-section">Welcome to UW Stout!</h4>
        <Organize sort={this.state.sortBy}/>
      </div>
    );
  }
}

export default App;
