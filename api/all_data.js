var db = require('./db');

db.view('pages/all_data', (err, res) => {
  res.forEach((row) => {
    console.log(row);
  });
});
