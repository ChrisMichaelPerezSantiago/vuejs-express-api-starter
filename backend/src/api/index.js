const express = require('express');
const users = require('./users');

const router = express.Router();

router.get('/' , (req , res) =>{
  res.json({
    message: '👑 Welcome To API Main End Point 👑'
  });
});

router.use('/users' , users);

module.exports = router;