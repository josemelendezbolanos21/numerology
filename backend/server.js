const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/users');
const profile = require('./routes/profile');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
// Connect to mongoDB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

app.use('/user', users);
app.use('/profile', profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running on port ${port}`));