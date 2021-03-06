import express from 'express';
var db = require('./db');

// Create a router just for the data API routes
const router = express.Router();

// Get all games data from CouchDB
router.get('/gdd-games-gutsch', (req, res) => {
  console.info('Requst at gdd-games');
  db.view('pages/All', (err, doc) => {
    let results = [];
    doc.forEach((row) => {
      results.push(row);
    });
    res.json(results);
  });
});

// Get one game data from CouchDB, based upon ID
router.get('/gdd-games-gutsch/by-id/:id', (req, res) => {
  console.info('Requst at gdd-games id');
  let id = parseInt(req.params.id);
  db.view('pages/byID', {key: id}, (err, doc) => {
    res.json(doc);
  });
});

// Export router so it can be attached to a server
export default router;
