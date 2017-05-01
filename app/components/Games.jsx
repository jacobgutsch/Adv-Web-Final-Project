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
      border: 'solid black 1px'
    };

    let summary = (
      <div className='movieSummary'>
        <table>
          <tbody>
            <tr>
              <span color='green' className='summaryTitle'>{this.state.gameData.name}</span>
            </tr>
            <tr>
              <img height='160px' className="w3-circle" src='./public/images/Galaga.png' alt='Galaxia' />
            </tr>
          </tbody>
        </table>
      </div>
    );

    let button = (
      <button type="button" onClick={() => { $('#myModal')[0].style.display='block'; }}
        data-toggle="modal" data-target="#myModal" className="w3-button w3-black">More Info</button>
    );

    return (

      <div className='w3-container w3-hoverable' style={myStyle}>
        {summary}
        {button}

        <div id="myModal" className="w3-modal fade" role="dialog">
          <div className="w3-modal-content">

            <header className="w3-containter w3-light-grey">
              <button type="button" className="close" onClick={() => { $('#myModal')[0].style.display='none'; }} data-dismiss="w3-modal"></button>
              <h4>{this.state.gameData.name}</h4>
            </header>

            <div className="w3-container">
              <table style={myStyle} >
                <tbody>
                  <tr>
                    <th colSpan="4"><img className="round" src={this.state.gameData.image} alt="Galaxia.png"></img></th>
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
              <button type="button" className="btn btn-default" onClick={() => { $('#myModal')[0].style.display='none'; }} data-dismiss="w3-modal">Close</button>
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
