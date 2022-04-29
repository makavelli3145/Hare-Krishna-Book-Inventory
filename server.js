const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/////////////////////////////////////////////////////////
//Note :We also could've just added all of the api routes in this file(From line 22)
const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

//Db config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port :${port}'));