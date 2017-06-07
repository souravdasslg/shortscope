var express = require('express');
var router = express.Router();

exports.controller = function (app,passport) {

    //redirect to the chat page
    router.get('/', function(req,res) {
        res.render('index');
    });

    //deliver the chat page
    router.get('/contact',function (req,res){
        res.render('contact');
    });

    //deliver the group chat page
    router.get('/portfolio',function (req,res){
        res.render('portfolio');
    });

    router.get('/services',function (req,res){
        res.render('services');
    });
    router.get('/team',function (req,res){
        res.render('team');
    });

    router.get('/about',function (req,res){
        res.render('about');
    });

    app.use('/',router);
};
