var cradle = require('cradle');
var CONFIG = require('../config.js');

var db = new(cradle.Connection)(
  `http://${CONFIG.couchDBHost}`,
  CONFIG.couchDBPort, {
    auth: {username: 'admin', password: '@#erFGbn'}
  }).database('gdd-games-gutsch');

module.exports = db;
