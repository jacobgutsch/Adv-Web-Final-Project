import axios from 'axios';

export const fetchGame = (id) => {
  return axios.get(`/api/gdd-games-gutsch/by-id/${id}`)
    .then((res) => {
      return res.data;
    });
};
