// Basic configurations
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

// connect to database mongodb
var uri = "mongodb://asder:ASDer123@mahasiswa-shard-00-00-6qyax.gcp.mongodb.net:27017,mahasiswa-shard-00-01-6qyax.gcp.mongodb.net:27017,mahasiswa-shard-00-02-6qyax.gcp.mongodb.net:27017/Mahasiswa?ssl=true&replicaSet=Mahasiswa-shard-0&authSource=admin&retryWrites=true";
mongoose.connect(uri);

// Configure app to use bodyParser()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// REGISTER OUR ROUTES
var apiRouter = require('./app/routes.js')(app, express);
app.use('/api/v1', apiRouter);

// START THE SERVER
app.listen(port);
console.log('Server http://localhost:' + port);