/**************************************
  MODULE IMPORT
**************************************/
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const config = require('./config.json');


/**************************************
  INITIALISATION
**************************************/
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/site/');
app.use(express.static(__dirname + '/site/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**************************************
  ROOTER SYSTEM
**************************************/
app.get('*', function(req, res){
    res.render('./index');
});

app.listen(config.port, config.adress);