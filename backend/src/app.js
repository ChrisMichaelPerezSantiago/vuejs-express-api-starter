const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middleware = require('./middleware');
const api = require('./api');
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.get('/' , (req , res) =>{
  res.json({
    message: '😛😳😗😓'
  });    
});

app.use('/api/v1' , api);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

module.exports = app;