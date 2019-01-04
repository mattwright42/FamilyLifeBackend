require('dotenv').config(); // load the .env file content
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs'); // 
const jwt = require('jsonwebtoken');

const db = require('./data/dbConfig.js');

const server = require('./api/server.js');
const port = process.env.PORT || 9000;

//MIDDLEWARE
function generateToken(user) {
  const payload = {
      subject: user.id,
      username:user.username,   
  };

  const secret = process.env.JWT_SECRET;
  const options = {
      expiresIn: '1h',
  };

  return jwt.sign(payload, secret, options)
}

function protected(req, res, next) {
  // token is normally sent in the the Authorization header
  const token = req.headers.authorization;

  if (token) {
    // is it valid
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        // token is invalid
        res.status(401).json({ message: 'invalid token' });
      } else {
        // token is gooooooooooood
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    // bounced
    res.status(401).json({ message: 'not token provided' });
  }
}

// function checkRole(role) {
//   return function(req, res, next) {
//     if (req.decodedToken && req.decodedToken.roles.includes(role)) {
//       next();
//     } else {
//       res.status(403).json({ message: 'you have no access to this resource' });
//     }
//   };
// }


server.post('/api/register', (req, res) => {
  const creds = req.body;
  const hash = bcrypt.hashSync(creds.password, 14);

  creds.password = hash;

  db('users')
  .insert(creds)
  .then(ids=> {
      res.status(201).json({message:'user added', ids});
  })
  .catch(err => console.log(err) && res.status(500).json(err))
})

// POST /api/login
server.post('/api/login', (req,res) => {
  const creds = req.body;

  db('users')
  .where({ username: creds.username })
  .first()
  .then(user => {
      if (user && bcrypt.compareSync(creds.password,user.password)) {
          const token = generateToken(user);
          res.status(200).json({ message: 'welcome user', token})
      } else {
          res.status(401).json({ message: 'the password or username was incorrect'})
      }
  })
  .catch(err => res.status(500).json(err))
})

server.get('/api/user', protected, (req,res) => {
  db('users')
  .select('id', 'username', 'password')
  .then( users => {
      res.json(users);
  })
  .catch(err => res.status(500).json(err))
})

server.listen(port, () =>
  console.log(`\n** welcome to the server running on ${port} **\n`)
);
