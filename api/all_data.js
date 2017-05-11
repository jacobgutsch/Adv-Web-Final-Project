var db = require('./db');

db.view('pages/All', (err, res) => {
  console.log(res);
});
