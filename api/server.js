const express = require('express');
// const cors = require('cors');
const server = express();
const db = require('../data/dbConfig.js');
const morgan = require('morgan');

const port = process.env.PORT || 9000;

server.use(express.json());
// server.use(cors());
server.use(morgan('dev'));

//Sanity Check
server.get('/', (req, res) => {
  res.send(`API running on port: ${port}`);
});



// //creates new user
// server.post('/api/users', (req, res) => {
//   const user = req.body;

//   db('users')
//     .insert(user)
//     .returning('id')
//     .then(ids => {
//       res.status(201).json(ids);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Error inserting', err });
//     });
// });



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
