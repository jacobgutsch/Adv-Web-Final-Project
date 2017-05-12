var cradle = require('cradle');
var CONFIG = require('../config.js');

var db = new(cradle.Connection)(
  `http://${CONFIG.couchDBHost}`,
  CONFIG.couchDBPort, {
    auth: {username: 'admin', password: 'perfect300'}
  }).database('gdd-games-gutsch');

module.exports = db;
