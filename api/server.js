const express = require('express');
const cors = require('cors');
const server = express();
const db = require('../data/dbConfig.js');
const morgan = require('morgan');

const port = process.env.PORT || 9000;

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

//Sanity Check
server.get('/', (req, res) => {
  res.send(`API running on port: ${port}`);
});

//returns all parents
server.get('/api/parents', (req, res) => {
  db('parents')
    .then(family => res.status(200).json(family))
    .catch(err => res.status(500).json(err));
});

//creates new parent
server.post('/api/parents', (req, res) => {
  const parent = req.body;

  db('parents')
    .insert(parent)
    .returning('id')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error inserting', err });
    });
});

//creates new child
server.post('/api/child', (req, res) => {
  const child = req.body;

  db('children')
    .insert(child)
    .returning('id')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error inserting', err });
    });
});

//get all chores
server.get('/api/chores', (req, res) => {
  db('chores')
    .then(chore => res.status(200).json(chore))
    .catch(err => res.status(500).json(err));
});

//creates chore
server.post('/api/chores', (req, res) => {
  const chore = req.body;

  db('chores')
    .insert(chore)
    .returning('id')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error inserting', err });
    });
});

//edits chore

//deletes chore

module.exports = server;
