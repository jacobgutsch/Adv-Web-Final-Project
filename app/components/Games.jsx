import React from 'react';

import * as ApiHelper from '../apiHelper';

class Games extends React.Component {

  constructor(props) {
    super(props);

    ApiHelper.fetchGame(props.id).then((gameData) => {
      this.setState({
        gameData: gameData
      });
    });

    this.state = {
      gameData: null
    };
  }

  render() {
    if(this.state.gameData == null) {
      return (<p>Loading ...</p>);
    }

    let myStyle = {
      border: 'solid black 1px',
      textAlign: 'center'
    };

    let cellStyle = {
      textAlign: 'center'
    };

    let modalID = `gameModal-${this.state.gameData.id}`;

    let summary = (
      <div onClick={() => { $(`#${modalID}`)[0].style.display='block'; }} className='movieSummary' style={cellStyle}>
        {this.state.gameData.name}<br/>
      <img height='200px' width='200px' style={{padding: '10px 10px 10px 10px'}} className="w3-circle w3-hover-opacity" src={this.state.gameData.image} alt='Galaxia' />
      </div>
    );

    let button = (
      <button type="button" onClick={() => { $(`#${modalID}`)[0].style.display='block'; }}
        data-toggle="modal" data-target={`#${modalID}`} className="w3-button w3-black">More Info</button>
    );

    return (

      <div className='w3-container w3-animate-opacity w3-cyan' style={myStyle}>
        {summary}
        {button}

        <div id={modalID} className="w3-modal fade w3-animate-opacity" role="dialog">
          <div className="w3-modal-content">

            <header className="w3-containter w3-light-grey">
              <button type="button" className="close" onClick={() => { $(`#${modalID}`)[0].style.display='none';}} data-dismiss="w3-modal"></button>
              <h4>{this.state.gameData.name}</h4>
            </header>

            <div className="w3-container">
              <table style={myStyle} >
                <tbody>
                  <tr>
                    <th colSpan="4"><img height="300px" className="round" src={this.state.gameData.image} alt="Galaxia.png"></img></th>
                  </tr>
                  <tr>
                    <th>ID: {this.state.gameData.id}</th>
                    <th>Genre: {this.state.gameData.genre}</th>
                    <th>Year: {this.state.gameData.year}</th>
                  </tr>
                  <tr>
                    <th colSpan="4">{this.state.gameData.description}</th>
                  </tr>
                  <tr>
                    <th colSpan="4">Developers: {this.state.gameData.developers}</th>
                  </tr>
                </tbody>
              </table>
            </div>

            <footer className="w3-containter w3-light-grey">
              <button type="button" className="btn btn-default" onClick={() => { $(`#${modalID}`)[0].style.display='none'; }} data-dismiss="w3-modal">Close</button>
            </footer>

          </div>
        </div>
      </div>
    );
  }
}

Games.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string,
  year: React.PropTypes.number,
  developers: React.PropTypes.string,
  genre: React.PropTypes.string,
  description: React.PropTypes.string,
  image: React.PropTypes.string
};

export default Games;
