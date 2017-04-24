import React from 'react';

class Games extends React.Component {

  render() {

    return (
      <div id="myModal" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal"></button>
            <h4 className="modal-title"><span id="movieName"></span></h4>
          </div>
          <div className="modal-body">
            <table style="border: solid black 1px;">
              <tr>
                <th colSpan="4">{Games.name}</th>
              </tr>
              <tr>
                <th colSpan="4">{Games.image}</th>
              </tr>
              <tr>
                <th>ID: {Games.id}</th>
                <th>Genre: {Games.genre}</th>
                <th>Year: {Games.year}</th>
              </tr>
              <tr>
                <th colSpan="4">{Games.description}</th>
              </tr>
              <tr>
                <th>Developers: {Games.developers}</th>
              </tr>
            </table>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>
    );
  }
}

Games.PropTypes = {
  id: React.PropTypes.int.isRequired,
  name: React.PropTypes.string,
  year: React.PropTypes.int,
  developers: React.PropTypes.string,
  genre: React.Proptypes.string,
  description: React.Proptypes.string,
  image: React.Proptypes.element
};

export default Games;
