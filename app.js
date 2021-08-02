const express = require('express');
// const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
// const path = require('path');

const app = express();

//set the view engine to ejs
app.set('view engine','ejs');

// app.use(bodyParser.urlencoded({extended: true}));

// uses public folder for static files
app.use(express.static("public"));
app.use('/css',express.static(__dirname + "public/CSS"));
app.use('/js',express.static(__dirname + "public/js"));
app.use('/img',express.static(__dirname + "public/img"));
// app.use(favicon(path.join(__dirname,"public","favicon.ico")));

//index page
app.get('/', function(req, res){
    res.render("pages/index");
});

app.get('/', function(req, res){
    res.render("pages/about");
});

app.get('/', function(req, res){
    res.render("pages/form");
});

app.get('/', function(req, res){
    res.render("pages/contact");
});

app.get('/', function(req, res){
    res.render("pages/login");
});

app.listen(3000,function(){
    console.log("Server's Up and running");
});