import axios from 'axios';

export const fetchFrameData = (gameID, playerName, frameName) => {
  return axios.get(`/api/database/${gameID}/${playerName}/${frameName}`)
    .then((res) => {
      return res.data;
    });
};

export const fetchPlayerScore = (gameID, playerName) => {
  return axios.get(`/api/database/${gameID}/${playerName}`)
    .then((res) => {
      return res.data;
    });
};

export const fetchGame = (id) => {
  return axios.get(`/api/games/${id}`)
    .then((res) => {
      return res.data;
    });
};

export const fetchGames = () => {
  return axios.get('/api/games')
    .then((res) => {
      return res.data;
    });
};
