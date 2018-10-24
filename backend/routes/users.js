const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.jsonp({ msg: 'User test' }));

module.exports = router;
