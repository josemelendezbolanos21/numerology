const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.get('/test', (req, res) => res.jsonp({ msg: 'User test' }));

router.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (user) {
        return res.status(400).json({ invalidEmail: 'The email is already registered' });
      }
      const newUser = new User({
        name,
        email,
        password,
      });

      // Encrypt password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });

    })
});

module.exports = router;
