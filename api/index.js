import express from 'express';
var db = require('./db');

// Create a router just for the data API routes
const router = express.Router();

// Get all games data from CouchDB
router.get('/gdd-games', (req, res) => {
  db.view('pages/all_data', (err, doc) => {
    let results = [];
    doc.forEach((row) => {
      results.push(row);
    });
    res.json(results);
  });
});

// Get one game data from CouchDB, based upon ID
/*router.get('/gdd-games/:id', (req, res) => {
  db.view('pages/all_data', (err, doc) => {

  });
});*/

// Export router so it can be attached to a server
export default router;
