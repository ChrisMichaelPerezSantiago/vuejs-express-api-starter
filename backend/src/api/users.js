const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(
    {
      "users": [
        {
          'name': 'Mark👦',
        },
        {
          'name': 'Maria👩',
        },
        {
          'name': 'Jason👦',
        },
        {
          'name': 'Sofia👩',
        },
        {
          'name': 'Michael👦',
        },
        {
          'name': 'Carlos👦', 
        }
      ]
    }
  );
});

module.exports = router;


