// module or labary import
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// local imports
var employeeController = require('./controllers/employeeController');

// middlewares
var app = express();
app.use(bodyParser.json());
app.use('/employees', employeeController);
app.use(cors({ origin: 'http://localhost:4200' }));


// server listen
app.listen(3000, () => console.log('Server started at port : 3000'));


