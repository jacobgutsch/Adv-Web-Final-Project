var db = require('./db');

db.view('pages/byName', {key: 'A Game'}, (err, res) => {
  console.log(res);
});
